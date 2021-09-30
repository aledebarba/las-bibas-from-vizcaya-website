const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Las Bibas From Vizcaya",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
],  
};
