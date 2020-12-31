import React from 'react'
import { Container } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import Media from 'react-media';
import Fade from 'react-reveal/Fade';

import useVirusAssets from '~/hooks/queries/useVirusAssets'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'
import FC from '~/types/fc'
import {Hero} from '~/types/hero.type'

interface Props {
  hero: Hero
}

const HeroSection:FC<Props> = ({hero}) => {
  const { virusImageFirst, virusImageSecond, virusImageThird, virusImageFourth } = useVirusAssets()
  return (
    <div className={styles.heroBg}>
    <Container fluid className={styles.fluidContainer}>
      <Container className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <Fade bottom delay={550}>
            <h3 className={styles.heroTitle}>{hero.title}</h3>
          </Fade>
          <Fade bottom delay={350}>
            <h1 className={styles.heroMainTitle}>{hero.description}</h1>
          </Fade>
          <Fade bottom delay={250}>
            <p className={styles.heroText}>{hero.text}</p>
          </Fade>
          <Fade bottom delay={200}>
            <SButton variant="secondary" className={styles.heroBtn}>Let us help</SButton>
          </Fade>
        </div>
        <Media query={{ maxWidth: 1199 }}>
          {matches =>
            matches ? (
              <Img
                fluid={hero.image.localFile.childImageSharp.fluid}
              />
            ) : (
              null
            )
          }
        </Media>
      </Container>
      <Media query={{ minWidth: 1200 }}>
        {matches =>
          matches ? (
            <div className={styles.heroImageWrapper}>
              <div className={styles.heroInnerImageWrapper}>
                <Img
                  fluid={hero.image.localFile.childImageSharp.fluid}
                  className={styles.outerImg}
                />
                <Img fluid={virusImageFirst.childImageSharp.fluid} className={styles.virusOne}/>
                <Img fluid={virusImageSecond.childImageSharp.fluid} className={styles.virusTwo}/>
                <Img fluid={virusImageThird.childImageSharp.fluid} className={styles.virusThree}/>
                <Img fluid={virusImageFourth.childImageSharp.fluid} className={styles.virusFour}/>
              </div>
            </div>
            
          ) : (
            null
          )
        }
      </Media>
    </Container>
    </div>
  )
}
export default HeroSection
