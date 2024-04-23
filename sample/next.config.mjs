/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: "api.xaydungtranle.vn",
      pathname: "/**",
      port: "",
      protocol: "https"
    }, {
      hostname: "localhost",
      pathname: "/**",
      port: "1112",
      protocol: "http"
    }]
  }
};

export default nextConfig;
