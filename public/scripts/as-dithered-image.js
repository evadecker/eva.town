const DITHERED_IMAGE_STYLE = `
.ditheredImageStyle {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    image-rendering: crisp-edges;
}
`;

class ASDitheredImage extends HTMLElement {
  constructor() {
    super();

    this.original_image_ = undefined;
    this.force_refresh_ = false;
    this.crunchFactor_ = this.getAutoCrunchFactor();
    this.canvas_ = undefined;
    this.context_ = undefined;
    this.image_loading_ = false;
    this.ignore_next_resize_ = false;
    this.worker_ = new Worker("ditherworker.js");
    this.cutoff_ = 0.5;
    this.darkrgba_ = [0, 0, 0, 255];
    this.lightrgba_ = [255, 255, 255, 255];

    this.worker_.onmessage = (e) => {
      const imageData = e.data.imageData;
      this.context_.putImageData(imageData, 0, 0);
    };

    this.resizing_timeout_ = undefined;

    this.last_draw_state_ = {
      width: 0,
      height: 0,
      crunchFactor: 0,
      imageSrc: "",
    };
  }

  connectedCallback() {
    if (!this.isConnected) {
      return;
    }

    const shadowDOM = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.innerHTML = DITHERED_IMAGE_STYLE;
    shadowDOM.appendChild(style);

    this.canvas_ = document.createElement("canvas");
    this.canvas_.setAttribute("role", "image");
    this.canvas_.setAttribute("aria-label", this.getAttribute("alt"));
    this.canvas_.classList.add("ditheredImageStyle");
    shadowDOM.appendChild(this.canvas_);

    this.context_ = this.canvas_.getContext("2d", { willReadFrequently: true });

    const resizeObserver = new ResizeObserver((entries) => {
      // browsers generated lots of resize events but we don't want to start refreshing until
      // the user has stopped resizing the page

      if (entries.length > 0) {
        if (entries[0].contentBoxSize) {
          if (this.ignore_next_resize_) {
            this.ignore_next_resize_ = false;
            return;
          }
          if (this.resizing_timeout_ !== undefined) {
            clearTimeout(this.resizing_timeout_);
          }
          this.resizing_timeout_ = setTimeout(() => {
            this.resizing_timeout_ = undefined;
            this.force_refresh_ = true;
            this.requestUpdate();
          }, 200);
        }
      }
    });

    resizeObserver.observe(this.canvas_);

    // since we avoid drawing the image if the element of far offscreen we need to use
    // an IntersectionObserver to notify use when the element is likely to be displayed
    const intersectionObserver = new IntersectionObserver(
      (intersections) => {
        if (intersections.length > 0) {
          if (intersections[0].isIntersecting) {
            this.force_refresh_ = true;
            this.requestUpdate();
          }
        }
      },
      { root: null, rootMargin: "1000px", threshold: [0] }
    );
    intersectionObserver.observe(this);

    this.force_refresh_ = true;
    this.requestUpdate();
  }

  static get observedAttributes() {
    return ["src", "crunch", "alt", "cutoff", "darkrgba", "lightrgba"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    if (name === "src") {
      this.force_refresh_ = true;
      this.original_image_ = undefined;
      this.requestUpdate();
    } else if (name === "crunch") {
      if (newValue === "auto") {
        this.crunchFactor_ = this.getAutoCrunchFactor();
      } else if (newValue === "pixel") {
        this.crunchFactor_ = 1.0 / this.getDevicePixelRatio();
      } else {
        this.crunchFactor_ = parseInt(newValue, 10);
        if (isNaN(this.crunchFactor_)) {
          this.crunchFactor_ = this.getAutoCrunchFactor();
        }
      }
      this.force_refresh_ = true;
      this.requestUpdate();
    } else if (name === "alt") {
      this.altText = newValue;
      if (this.canvas !== undefined) {
        const currentAltText = this.canvas.getAttribute("aria-label");
        if (currentAltText !== newValue) {
          this.canvas.setAttribute("aria-label", newValue);
        }
      }
    } else if (name === "cutoff") {
      this.cutoff_ = parseFloat(newValue);
      if (isNaN(this.cutoff_)) {
        this.cutoff_ = 0.5;
      }
      this.cutoff_ = Math.min(1.0, Math.max(0.0, this.cutoff_));
      this.force_refresh_ = true;
      this.requestUpdate();
    } else if (name === "darkrgba") {
      // must be in the form "rgba(10, 10, 10, 255)"
      this.darkrgba_ = this.parseRGBA(newValue);
      this.force_refresh_ = true;
      this.requestUpdate();
    } else if (name === "lightrgba") {
      this.lightrgba_ = this.parseRGBA(newValue);
      this.force_refresh_ = true;
      this.requestUpdate();
    }
  }

  // The crunch factor defaults 1 css pixel to 1 dither pixel which I think looks best when the device pixel ratio is 1 or 2
  // If the pixel ratio is 3 or above (like on my iPhone) then even css pixels are too small to make dithering
  // look effective, so I double the pixels again
  getAutoCrunchFactor() {
    if (this.getDevicePixelRatio() < 3) {
      return 1;
    } else {
      return 2;
    }
  }

  getDevicePixelRatio() {
    // this should always be an integer for the dithering code to work
    return window.devicePixelRatio;
  }

  isInOrNearViewport() {
    // this only handles vertical scrolling, could be extended later to handle horizontal
    // but it probably doesn't matter
    const margin = 1500;
    const r = this.getBoundingClientRect();

    const viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    const above = r.bottom + margin < 0;
    const below = r.top - margin > viewHeight;

    return !above && !below;
  }

  // all drawing is funneled through requestUpdate so that multiple calls are coalesced to prevent
  // processing the image multiple times for no good reason
  requestUpdate() {
    if (this.original_image_ !== undefined) {
      if (!this.isInOrNearViewport()) {
        return; // suppress update, the intersection observer will call us back as the element scrolls into view
      }
    }

    window.requestAnimationFrame((timestamp) => {
      if (!this.force_refresh_) {
        return;
      }
      if (this.original_image_ === undefined) {
        this.loadImage();
        return;
      }
      if (this.force_refresh_) {
        this.repaintImage();
      }
    });
  }

  loadImage() {
    if (this.image_loading_) {
      return;
    }
    this.image_loading_ = true;
    const image = new Image();
    image.src = this.getAttribute("src");

    // image.onerror is old and (literally) busted - it does not file on decode errors (ie if the src does not point to a valid image)
    // The new way is promise based - possibly better
    image
      .decode()
      .then(() => {
        this.original_image_ = image;
        this.ignore_next_resize_ = true;
        this.canvas_.style.aspectRatio =
          this.original_image_.width + "/" + this.original_image_.height;
        this.force_refresh_ = true;
        this.requestUpdate();
      })
      .catch((decodeError) => {
        console.log("Error decoding image: ", decodeError);
        this.original_image_ = undefined;
      })
      .finally(() => {
        this.image_loading_ = false;
      });
  }

  parseRGBA(s) {
    const matches = s.match(
      /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i
    );
    if (matches) {
      return [matches[1], matches[2], matches[3], matches[4]];
    } else {
      return [255, 255, 255, 255];
    }
  }

  repaintImage() {
    const rect = this.canvas_.getBoundingClientRect();
    let screenPixelsToBackingStorePixels = this.getDevicePixelRatio();
    let fractionalPart =
      screenPixelsToBackingStorePixels -
      Math.floor(screenPixelsToBackingStorePixels);

    // that's it! I am officially giving up on trying to account for all the weird pixelDeviceRatios that Chrome likes
    // to serve up at different zoom levels. I can understand nice fractions like 2.5 but 1.110004 and 0.89233 are just stupid
    // If the fractional part doesn't make sense then just ignore it. This will give incorrect results but they still look
    // pretty good if you don't look too closely.
    if (1.0 / fractionalPart > 3) {
      fractionalPart = 0;
      screenPixelsToBackingStorePixels = Math.round(
        screenPixelsToBackingStorePixels
      );
    }
    if (fractionalPart !== 0) {
      screenPixelsToBackingStorePixels = Math.round(
        screenPixelsToBackingStorePixels * Math.round(1.0 / fractionalPart)
      );
    }

    const calculatedWidth = Math.round(
      rect.width * screenPixelsToBackingStorePixels
    );
    const calculatedHeight = Math.round(
      rect.height * screenPixelsToBackingStorePixels
    );
    const adjustedPixelSize =
      screenPixelsToBackingStorePixels * this.crunchFactor_;

    // double check - we may have already painted this image
    if (
      this.last_draw_state_.width === calculatedWidth &&
      this.last_draw_state_.height === calculatedHeight &&
      this.last_draw_state_.adjustedPixelSize === adjustedPixelSize &&
      this.last_draw_state_.imageSrc === this.original_image_.currentSrc &&
      this.last_draw_state_.cutoff === this.cutoff_ &&
      this.last_draw_state_.darkrgba === this.darkrgba_ &&
      this.last_draw_state_.lightrgba === this.lightrgba_
    ) {
      return; // nothing to do
    }

    this.canvas_.width = calculatedWidth;
    this.canvas_.height = calculatedHeight;

    this.last_draw_state_.width = this.canvas_.width;
    this.last_draw_state_.height = this.canvas_.height;
    this.last_draw_state_.adjustedPixelSize = adjustedPixelSize;
    this.last_draw_state_.imageSrc = this.original_image_.currentSrc;
    this.last_draw_state_.cutoff = this.cutoff_;
    this.last_draw_state_.darkrgba = this.darkrgba_;
    this.last_draw_state_.lightrgba = this.lightrgba_;

    this.context_.imageSmoothingEnabled = true;
    this.context_.drawImage(
      this.original_image_,
      0,
      0,
      this.canvas_.width / adjustedPixelSize,
      this.canvas_.height / adjustedPixelSize
    );
    const originalData = this.context_.getImageData(
      0,
      0,
      this.canvas_.width / adjustedPixelSize,
      this.canvas_.height / adjustedPixelSize
    );
    this.context_.clearRect(0, 0, this.canvas_.width, this.canvas_.height);
    // TODO: look at transferring the data in a different datastructure to prevent copying
    // unfortunately Safari has poor support for createImageBitmap - using it with ImageData doesn't work
    const msg = {};
    msg.imageData = originalData;
    msg.pixelSize = adjustedPixelSize;
    msg.cutoff = this.cutoff_;
    msg.blackRGBA = this.darkrgba_;
    msg.whiteRGBA = this.lightrgba_;
    this.worker_.postMessage(msg);

    this.force_refresh_ = false;
  }
}

window.customElements.define("as-dithered-image", ASDitheredImage);
