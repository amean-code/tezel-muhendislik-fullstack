/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.tezelmuhendislik.com",
  generateRobotsTxt: true,
  exclude: ["/admin", "/admin/*"],
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin" },
    ],
  },
};
