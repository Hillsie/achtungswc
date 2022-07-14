module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    "postcss-focus-visible": {},
    "postcss-preset-env": {
      features: { "nesting-rules": true },
    },
    autoprefixer: {},
    tailwindcss: {},
    "@fullhuman/postcss-purgecss": {
      content: [
        "./src/**/*.tsx",
        "./src/**/*.ts",
        "./src/**/*.mdx",
        "./public/index.html",
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
    },
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: "default" } }
      : {}),
  },
};
