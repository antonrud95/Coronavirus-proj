import React from 'react'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import ExplanationSection from '~/components/sections/explanation-section/explanation.component'
import ContagionSection from '~/components/sections/contagion-section/contagion.component'
import SymptompsSection from '~/components/sections/symptomps-section/symptomps.component'
import InfoSection from '~/components/sections/info-section/info.component'

import useHeroBgAssets from '~/hooks/queries/useHeroBgAssets'
import useExplanationAssets from '~/hooks/queries/useExplanationAssets'
import useContagionAssets from '~/hooks/queries/useContagionAssets'
import useSymptompsAssets from '~/hooks/queries/useSymptompsAssets'
import useInfoAssets from '~/hooks/queries/useInfoAssets'

const IndexPage = () => {
  const {graphCmsHero} = useHeroBgAssets()
  const {graphCmsExplanation} = useExplanationAssets()
  const {allGraphCmsContagion} = useContagionAssets()
  const {graphCmsSymptomp} = useSymptompsAssets()
  const {allGraphCmsInfo} = useInfoAssets()
  return(
  <Layout>
    <SEO title="Unikorns Starter Kit" />
    <HeroSection hero={graphCmsHero}/>
    <ExplanationSection explanation={graphCmsExplanation}/>
    <ContagionSection contagions={allGraphCmsContagion.nodes}/>
    <SymptompsSection symptomps={graphCmsSymptomp}/> 
    <InfoSection information={allGraphCmsInfo.nodes}/>
  </Layout>
  )
}


export default IndexPage
