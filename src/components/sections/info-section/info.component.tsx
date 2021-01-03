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
        <div>
            {information.map((info: Info, index) => {
                return(
                    <InfoItem 
                        key={info.id}
                        title={info.title}
                        text={info.text}
                        image={info.image.localFile.childImageSharp.fluid}
                        number={info.number.localFile.childImageSharp.fluid}
                    />
                )
            })}
        </div>
    )
}

export default InfoSection