module.exports = {
  webpack(config, options) {
    return config;
  },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT,
    AUTH_URL: process.env.AUTH_URL,
    PAYSTACK_PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  },
  target: "serverless",
  distDir: "out",
};
