import React from 'react'
import { Container } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import Media from 'react-media';

import useVirusAssets from '~/hooks/queries/useVirusAssets'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'
import FC from '~/types/fc'
import {Hero} from '~/types/hero.type'

interface Props {
  hero: Hero
}

const HeroSection:FC<Props> = ({hero}) => {
  const { virusImage } = useVirusAssets()
  return (
    <Container fluid className={styles.fluidContainer}>
      <Container className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <h3 className={styles.heroTitle}>{hero.title}</h3>
          <h1 className={styles.heroMainTitle}>{hero.description}</h1>
          <p className={styles.heroText}>{hero.text}</p>
          {/* <Img fluid={virusImage.childImageSharp.fluid}/> */}
          <SButton variant="secondary" className={styles.heroBtn}>Let us help</SButton>
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
            <Img
              fluid={hero.image.localFile.childImageSharp.fluid}
              className={styles.outerImg}
            />
          ) : (
            null
          )
        }
      </Media>
    </Container>
  )
}
export default HeroSection
