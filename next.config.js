/** @type {import('next').NextConfig} */
const nextConfig = {
  // Se você quiser usar <Image> com domínios externos, configure aqui.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.pontoamigo.com" },
      { protocol: "https", hostname: "static.wixstatic.com" },
      { protocol: "https", hostname: "static.parastorage.com" }
    ]
  }
};

module.exports = nextConfig;
