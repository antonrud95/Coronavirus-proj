import React from 'react'
import {graphql} from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection hero={data.graphCmsHero}/>
  </Layout>
)
export const query = graphql`
  query {
    graphCmsHero {

        id
        image {
          url
          localFile {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        text
        title
        description
      
      
    }
  }
`

export default IndexPage
