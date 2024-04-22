import type { GatsbyConfig } from "gatsby";

module.exports = {
  pathPrefix: "/minji-website",
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Minji's Website`,
    image: `logo.png`,
    siteUrl: `https://minjikim19.github.io/minji-website/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};

export default config;
