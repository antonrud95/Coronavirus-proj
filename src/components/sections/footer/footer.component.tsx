import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby'
import Logo from '~/components/ui/general/logo/logo.component'
import Img from 'gatsby-image'

import Facebook from '~/assets/icons/social/facebook.svg'
import Twitter from '~/assets/icons/social/twitter.svg'
import Youtube from '~/assets/icons/social/youtube.svg'
import Vvv from '~/assets/icons/social/v.svg'

import useVirusAssets from '~/hooks/queries/useVirusAssets'

import styles from './footer.module.scss'

const FooterSection = () => {
    const {virusImageFifth, virusImageSixth} = useVirusAssets()
    return(
        <Container fluid className={styles.fluidContainer}>
            <Container className={styles.footerContainer}>
                <Fade bottom>
                    <Logo />
                </Fade>
                <Nav className={styles.footerNav}>
                    <Fade bottom delay={300}>
                        <Link to="/" className={styles.navLink}>
                            Overview
                        </Link>
                    </Fade>
                    <Fade bottom delay={350}>
                        <Link to="/" className={styles.navLink}>
                            Symptoms
                        </Link>
                    </Fade>
                    <Fade bottom delay={400}>
                        <Link to="/" className={styles.navLink}>
                            Prevention
                        </Link>
                    </Fade>
                    <Fade bottom delay={450}>
                        <Link to="/" className={styles.navLink}>
                            Treatment
                        </Link>
                    </Fade>
                </Nav>
                <div className={styles.footerSocial}>
                    <Fade bottom delay={500}>
                        <Link to="/">
                            <Facebook />
                        </Link>
                    </Fade>
                    <Fade bottom delay={550}>
                        <Link to="/">
                            <Youtube />
                        </Link>
                    </Fade>
                    <Fade bottom delay={600}>
                        <Link to="/">
                            <Vvv />
                        </Link>
                    </Fade>
                    <Fade bottom delay={650}>
                        <Link to="/">
                            <Twitter />
                        </Link>
                    </Fade>
                </div>
            </Container>
            <Fade bottom delay={700}>
                <p className={styles.footerText}>2020 @ All rights reserved by pixelspark.co</p>
            </Fade>
            <Img fluid={virusImageFifth.childImageSharp.fluid} className={styles.imageOne}/>
            <Img fluid={virusImageSixth.childImageSharp.fluid} className={styles.imageTwo}/>
        </Container>
    )
}

export default FooterSection