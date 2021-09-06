const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    BASE_ENDPOINT: process.env.NEXT_PUBLIC_BASE_ENDPOINT,
    AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
    PAYSTACK_PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  },
  target: "serverless",
  distDir: "out",
});
