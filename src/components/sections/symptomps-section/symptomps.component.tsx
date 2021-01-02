import React from 'react'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

import styles from './symptomps.module.scss'
import Img from 'gatsby-image'
import FC from '~/types/fc'
import {Symptomps} from '~/types/symptomps.types'
import useOrnamentsAssets from '~/hooks/queries/useOrnamentsAssets'

interface Props {
    symptomps: Symptomps
}


const SymptompsSection: FC<Props> = ({symptomps}) => {
    const {leftOrnament, rightOrnament} = useOrnamentsAssets()
    return(
        <Container fluid className={styles.containerFluid}>
            <Container className={styles.symptompsContainer}>
                <Fade bottom>
                    <h3 className={styles.symptompsUppertitle}>{symptomps.uppertitle}</h3>
                </Fade>
                <Fade bottom delay={300}>
                    <h2>{symptomps.title}</h2>
                </Fade>
                <Fade bottom delay={350}>
                    <p className={styles.symptompsText}>{symptomps.text}</p>
                </Fade>
                <Fade bottom delay={375}>
                    <Img fluid={symptomps.image.localFile.childImageSharp.fluid} className={styles.symptompsImage}/>
                </Fade>
            </Container>
                <Img fluid={leftOrnament.childImageSharp.fluid} className={styles.leftOrnament}/>
                <Img fluid={rightOrnament.childImageSharp.fluid} className={styles.rightOrnament}/>
        </Container>
    )
}

export default SymptompsSection