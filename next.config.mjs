/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
          hostname: "api.xaydungtranle.vn",
          pathname: "/**",
          port: "",
          protocol: "https"
        }]
      }
};

export default nextConfig;
