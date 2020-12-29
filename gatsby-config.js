require('dotenv').config()

const path = require('path')
const {
  GATSBY_ACTIVE_ENV,
  GRAPHCMS_ENDPOINT,
  GRAPHCMS_TOKEN,
  GATSBY_SITE_URL,
  GATSBY_TITLE,
  GATSBY_DESCRIPTION,
  GOOGLE_ANALYTICS_ID,
} = process.env
const isProd = GATSBY_ACTIVE_ENV === 'production'

module.exports = {
  siteMetadata: {
    title: GATSBY_TITLE,
    siteUrl: GATSBY_SITE_URL,
    description: GATSBY_DESCRIPTION,
    author: '@unikorns',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `red hat display\:400,500,700`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-source-graphcms',
        options: {
          // Your GraphCMS API endpoint. Available from your project settings.
          endpoint: GRAPHCMS_ENDPOINT,
          // A PAT (Permanent Auth Token) for your project. Required if your project is not available publicly, or you want to scope access to a specific content stage (i.e. draft content).
          token: GRAPHCMS_TOKEN,
          downloadLocalImages: true
        },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
        extensions: [],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'unikorns-gatsby-starter',
        short_name: 'unikorns',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/assets/icons/global/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: GATSBY_SITE_URL,
        sitemap: `${GATSBY_SITE_URL}/sitemap.xml`,
        policy: isProd
          ? [{ userAgent: '*', allow: '/' }]
          : [{ userAgent: '*', disallow: '/' }],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
