import React from 'react'
import {Container} from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import Fade from 'react-reveal/Fade';

import styles from './feedback.module.scss'

const FeedbackSection = () => {
    return(
        <Container className={styles.feedbackWrapper}>
            <Fade bottom>
                <h2 className={styles.feedbackHeader}>Have Question in mind?{<br />} Let us help you</h2>
            </Fade>
            <Fade bottom delay={300}>
                <div className={styles.formWrapper}>
                    <form className={styles.form}>
                        <input type="text" placeholder="Enter your email" className={styles.inputStyles}/>
                        <SButton variant="secondary" className={styles.btnWrapper}>Send</SButton>
                    </form>
                </div>
            </Fade>
        </Container>
    )
}

export default FeedbackSection