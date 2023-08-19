module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/'],
    },
    assert: {
      "preset": "lighthouse:no-pwa",
      "assertions": {
        "bf-cache": "off",
        "csp-xss": "off",
        "font-display": "warn",
        "uses-rel-preconnect": "off",
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
