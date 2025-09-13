
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: '<https://bible-api.com/>; rel="preconnect"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
