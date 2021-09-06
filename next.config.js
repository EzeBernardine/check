const withImages = require("next-images");
module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    GEO_API: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  },
  target: "serverless",
  distDir: ".next",
  images: {
    domains: ["res.cloudinary.com"],
  },
});
