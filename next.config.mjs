/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/en/youcine-akp-for-tv",
        destination: "/en/youcine-apk-for-tv",
        permanent: true,
      },
      {
        source: "/en/youcine-for-ios",
        destination: "/en/youcine-apk-for-ios",
        permanent: true,
      },
      {
        source: "/es",
        destination: "/",
        permanent: true,
      },
      {
        source: "/category/uncategorized",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/youcine-nao-funciona-como-resolver",
        destination: "/blogs/youcine-nao-funciona-como-resolver",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
