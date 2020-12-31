import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import useHeroBgAssets from '~/hooks/queries/useHeroBgAssets'


const IndexPage = () => {
  const {graphCmsHero} = useHeroBgAssets()
  return(
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection hero={graphCmsHero}/>
  </Layout>
  )
}


export default IndexPage
