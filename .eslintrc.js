module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:astro/recommended",
    ],
    parserOptions: {
        project: ["./tsconfig.json"],
    },
}
