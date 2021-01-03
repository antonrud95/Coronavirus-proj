import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Img from 'gatsby-image'
import FC from '~/types/fc'
import Fade from 'react-reveal/Fade';

import styles from './info-item.module.scss'

interface Props {
    number: any
    image: any 
    title: string
    text: string
    rowStyles?: string
    imageStyles?: string
}

const InfoItem: FC<Props> = ({number, image, title, text, rowStyles, imageStyles}) => {
    return(
        <Container>
            <Row className={rowStyles}>
                <Col xs="12" lg="6">
                    <Img fluid={image} className={imageStyles}/>
                </Col>
                <Col xs="12" lg="6" className={styles.contentWrapper}>
                    <div className={styles.numberWrapper}>
                        <Fade bottom>
                            <Img fluid={number} className={styles.numberImage}/>
                        </Fade>
                    </div>
                    <div>
                        <Fade bottom delay={300}>
                            <h3 className={styles.infoTitle}>{title}</h3>
                        </Fade>
                        <Fade bottom delay={350}>
                            <p className={styles.infoText}>{text}</p>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InfoItem