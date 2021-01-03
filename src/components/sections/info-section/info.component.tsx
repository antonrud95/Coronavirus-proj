import React from 'react'
import {Container} from 'react-bootstrap'
import InfoItem from '~/components/ui/general/info-item/info-item.component'
import FC from '~/types/fc'
import {Info} from '~/types/info.type'
import useVirusAssets from '~/hooks/queries/useVirusAssets'
import Img from 'gatsby-image'
import Fade from 'react-reveal/Fade';

import styles from './info.module.scss'

interface Props {
    information: Info[]
}

const InfoSection: FC<Props> = ({information}) => {
    const {virusImageSeventh, virusImageEighth, virusImageNineth} = useVirusAssets()
    return(
        <Container fluid className={styles.fluidContainer}>
            <div className={styles.infoHeader}>
                <Fade bottom>
                    <h3 className={styles.infoUppertitle}>Covid-19</h3>
                </Fade>
                <Fade bottom delay={300}>
                    <h2 className={styles.infoTitle}>What should we do</h2>
                </Fade>
                <Fade bottom delay={350}>
                    <p className={styles.infoText}> Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</p>
                </Fade>
            </div>
            <Img fluid={virusImageSeventh.childImageSharp.fluid} className={styles.imageSeven}/>
            <Img fluid={virusImageEighth.childImageSharp.fluid} className={styles.imageEight}/>
            <Img fluid={virusImageNineth.childImageSharp.fluid} className={styles.imageNine}/>
            <div>
                {information.map((info: Info, index) => {
                    if(index === 0 || index === 2) {
                        return(
                            <InfoItem 
                                key={info.id}
                                title={info.title}
                                text={info.text}
                                image={info.image.localFile.childImageSharp.fluid}
                                number={info.number.localFile.childImageSharp.fluid}
                                rowStyles={styles.infoRow__reversed}
                                imageStyles={styles.rightImage}
                            />
                        )
                    } else {
                        return(
                            <InfoItem 
                                key={info.id}
                                title={info.title}
                                text={info.text}
                                image={info.image.localFile.childImageSharp.fluid}
                                number={info.number.localFile.childImageSharp.fluid}
                                rowStyles={styles.infoRow}
                                imageStyles={styles.leftImage}
                            />
                        )
                    }
                    
                })}
            </div>
        </Container>
    )
}

export default InfoSection