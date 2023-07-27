/** @type {import('next').NextConfig} */
const nextConfig = {
    css: {
        modules: true,
        loaderOptions: {
          importLoaders: 1,
        },
      },
}

module.exports = nextConfig
