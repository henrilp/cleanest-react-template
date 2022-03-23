/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  pwa: {
    dest: "public",
  },
  i18n,
};

module.exports = withPWA(nextConfig);
