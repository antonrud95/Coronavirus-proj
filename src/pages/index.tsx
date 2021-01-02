import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import ExplanationSection from '~/components/sections/explanation-section/explanation.component'
import useHeroBgAssets from '~/hooks/queries/useHeroBgAssets'
import useExplanationAssets from '~/hooks/queries/useExplanationAssets'

const IndexPage = () => {
  const {graphCmsHero} = useHeroBgAssets()
  const {graphCmsExplanation} = useExplanationAssets()
  return(
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection hero={graphCmsHero}/>
    <ExplanationSection explanation={graphCmsExplanation}/>
  </Layout>
  )
}


export default IndexPage
