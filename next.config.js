/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,

  },
  images: {
    domains: ['fakestoreapi.com', "https://image.tmdb.org/t/p/w500", "image.tmdb.org", "https://www.themoviedb.org"],
},
}

module.exports = nextConfig
