import * as styles from "./synth.css";

interface SynthStartProps {
  isSynthActive: boolean;
  onClick: React.MouseEventHandler<SVGGElement>;
}

export const SynthStart = ({ isSynthActive, onClick }: SynthStartProps) => {
  return (
    !isSynthActive && (
      <g id="synth-start" className={styles.synthStart} onClick={onClick}>
        <rect
          id="hitarea"
          fillOpacity="0"
          fillRule="nonzero"
          x="0"
          y="0"
          width="270"
          height="152"
        ></rect>
        <path
          id="letter-p"
          d="M94,20 L96,20 L96,32 L94,32 L94,34 L92,34 L92,36 L82,36 L82,42 L80,42 L80,44 L70,44 L70,42 L68,42 L68,18 L70,18 L70,22 L72,22 L72,20 L74,20 L74,18 L70,18 L70,16 L92,16 L92,18 L94,18 L94,20 Z M82,22 L82,30 L86,30 L86,22 L82,22 Z"
          className={styles.lcdBase}
          style={{ animationDelay: "0s" }}
        ></path>
        <polygon
          id="letter-l"
          points="128 36 128 38 130 38 130 42 128 42 128 44 106 44 106 42 104 42 104 18 106 18 106 22 108 22 108 20 110 20 110 18 106 18 106 16 116 16 116 18 118 18 118 36"
          className={styles.lcdBase}
          style={{ animationDelay: "0.25s" }}
        ></polygon>
        <path
          id="letter-a"
          d="M164,20 L164,22 L166,22 L166,42 L164,42 L164,44 L160,44 L160,42 L158,42 L158,30 L152,30 L152,42 L150,42 L150,44 L140,44 L140,42 L138,42 L138,20 L140,20 L140,22 L142,22 L142,20 L144,20 L144,18 L142,18 L142,16 L160,16 L160,18 L162,18 L162,20 L164,20 Z M152,22 L152,26 L158,26 L158,22 L152,22 Z"
          className={styles.lcdBase}
          style={{ animationDelay: "0.5s" }}
        ></path>
        <polygon
          id="letter-y"
          points="198 26 198 28 196 28 196 30 194 30 194 42 192 42 192 44 184 44 184 42 182 42 182 30 180 30 180 28 178 28 178 26 176 26 176 24 174 24 174 18 176 18 176 22 178 22 178 20 180 20 180 18 176 18 176 16 184 16 184 18 186 18 186 20 190 20 190 18 192 18 192 16 200 16 200 18 202 18 202 24 200 24 200 26"
          className={styles.lcdBase}
          style={{ animationDelay: "0.75s" }}
        ></polygon>
        <path
          d="M108,20 L108,22 L106,22 L106,18 L110,18 L110,20 L108,20 Z M72,20 L72,22 L70,22 L70,18 L74,18 L74,20 L72,20 Z M142,20 L142,22 L140,22 L140,18 L144,18 L144,20 L142,20 Z M178,20 L178,22 L176,22 L176,18 L180,18 L180,20 L178,20 Z"
          className={styles.lcdHighlight}
        ></path>
      </g>
    )
  );
};
