/**
 * for dynamic configs : https://github.com/isaachinman/next-i18next#unserialisable-configs
 *
 * changing language dynamically from browser shouldn't work
 * as we load only necessary translations from getStaticProps (SSG)
 */

module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["en", "fr"],
    localePath: "./locales",
  },
};
