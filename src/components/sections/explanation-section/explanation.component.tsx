import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FC from '~/types/fc'
import {Explanation} from '~/types/explanation.type'
import Img from 'gatsby-image'
import SButton from '~/components/ui/general/button/button.component'
import useVirusAssets from '~/hooks/queries/useVirusAssets'
import Fade from 'react-reveal/Fade';

import styles from './explanation.module.scss'

interface Props {
    explanation: Explanation
}

const ExplanationSection: FC<Props> = ({explanation}) => {
    const { virusImageFifth } = useVirusAssets()
    return(
        <Container fluid className={styles.fluidContainer}>
            <Container>
                <Row className={styles.row}>
                    <Col xs="12" lg="5" xl="6" className={styles.imageContainer}>
                        <Fade bottom>
                            <Img fluid={explanation.image.localFile.childImageSharp.fluid}/>
                        </Fade>
                    </Col>
                    <Col xs="12" lg="7" xl="6" className={styles.contentWrapper}>
                        <Fade bottom delay={300}>
                            <h3 className={styles.expUppertitle}>{explanation.uppertitle}</h3>
                        </Fade>
                        <Fade bottom delay={400}>
                            <h2 className={styles.expTitle}>{explanation.title}</h2>
                        </Fade>
                        <Fade bottom delay={500}>
                            <p className={styles.expText}>{explanation.text}</p>
                        </Fade>
                        <Fade bottom delay={600}>
                            <SButton variant="secondary" className={styles.expButton}>Learn more</SButton>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            <Img fluid={virusImageFifth.childImageSharp.fluid} className={styles.virusFive}/>
        </Container>
    )
}

export default ExplanationSection