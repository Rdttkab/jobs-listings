/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "qhpcyshcjwjsxjkydkcx.supabase.co" },
    ],
  },
};

module.exports = nextConfig;
