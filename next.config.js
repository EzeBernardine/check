module.exports = {
  webpack(config, options) {
    return config;
  },
  env: {
    GEO_API: process.env.NEXT_PUBLIC_ANALYTICS_ID,
    AUTH_URL: process.env.AUTH_URL,
    BASE_ENDPOINT: process.env.BASE_ENDPOINT
  },
  target: "serverless",
  distDir: ".next",
}
