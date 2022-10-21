module.exports = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["rb.gy", "image.tmdb.org"]
  }
  // webpack: (config) => {
  //   config.resolve = {
  //     ...config.resolve,
  //     fallback: {
  //       fs: false,
  //       path: false,
  //       os: false
  //     }
  //   };

  //   return config;
  // }
};
