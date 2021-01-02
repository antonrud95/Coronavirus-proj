import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import FC from '~/types/fc'
import {Contagion} from '~/types/contagion.type'
import Img from 'gatsby-image'
import useVirusAssets from '~/hooks/queries/useVirusAssets'
import Fade from 'react-reveal/Fade';

import styles from './contagion.module.scss'

interface Props {
    contagions: Contagion[]
}

const ContagionSection: FC<Props> = ({contagions}) => {
    const { virusImageSixth} = useVirusAssets()
    return(
        <Container fluid className={styles.fluidContainer}>
            <Container>
                <div className={styles.contagionHeader}>
                    <Fade bottom>
                        <h3 className={styles.headerTitle}>Covid-19</h3>
                    </Fade>
                    <Fade bottom delay={300}>
                        <h2>Contagion</h2>
                    </Fade>
                    <Fade bottom delay={350}>
                        <p className={styles.headerText}>Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type</p>
                    </Fade>
                </div>
                <div className={styles.itemsWrapper}>
                    {contagions.map((contagion: Contagion, index) => {
                        return(
                            <Fade bottom key={contagion.id} >
                                <div className={styles.itemWrapper}>
                                    <Img fluid={contagion.image.localFile.childImageSharp.fluid} className={styles.itemImg}/>
                                    <Fade bottom delay={300}>
                                        <h3 className={styles.itemTitle}>{contagion.title}</h3>
                                    </Fade>
                                    <Fade bottom delay={350}>
                                        <p className={styles.itemText}>{contagion.text}</p>
                                    </Fade>
                                </div>
                            </Fade>
                        )
                })}
                </div>
            </Container>
            <Img fluid={virusImageSixth.childImageSharp.fluid} className={styles.virusSixth}/>
            <Img fluid={virusImageSixth.childImageSharp.fluid} className={styles.virusSeventh}/>
        </Container>
    )
}

export default ContagionSection