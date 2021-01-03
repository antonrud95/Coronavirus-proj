import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import InfoItem from '~/components/ui/general/info-item/info-item.component'
import FC from '~/types/fc'
import {Info} from '~/types/info.type'

import styles from './info.module.scss'

interface Props {
    information: Info[]
}

const InfoSection: FC<Props> = ({information}) => {
    return(
        <Container fluid className={styles.fluidContainer}>
            <div className={styles.infoHeader}>
                <h3 className={styles.infoUppertitle}>Covid-19</h3>
                <h2 className={styles.infoTitle}>What should we do</h2>
                <p className={styles.infoText}> Corona viruses are a type of virus. There are many different kinds, and some cause disease. A newly identified type has caused</p>
            </div>
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