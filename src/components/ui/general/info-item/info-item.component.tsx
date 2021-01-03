import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'
import FC from '~/types/fc'

import styles from './info-item.module.scss'

interface Props {
    number: any
    image: any 
    title: string
    text: string
}

const InfoItem: FC<Props> = ({number, image, title, text}) => {
    return(
        <Container>
            <Row>
                <Col xs="12" lg="6">
                    <Img fluid={image}/>
                </Col>
                <Col xs="12" lg="6">
                    <div>
                        <Img fluid={number}/>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoItem