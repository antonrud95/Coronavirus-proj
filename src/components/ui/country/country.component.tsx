import React from 'react'
import styles from './component.module.scss'
import FC from '~/types/fc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface Props {
    flag: any
    country: string
    value: string
    isDown?: boolean
}

const CountryComponent:FC<Props> = ({flag, country, value, isDown}) => {
    return(
        <div className={styles.componentWrapper}>
            <div className={styles.flagWrapper}>
                <img src={flag} className={styles.componentImage}/>
                <p className={styles.componentCountry}>{country}</p>
            </div>
            <div className={styles.valueWrapper}>
                <p className={styles.componentValue}>{value}</p>
                {isDown ? <FontAwesomeIcon icon={faCaretDown} size="2x" className={styles.green}/> : <FontAwesomeIcon icon={faCaretUp} size="2x" className={styles.red}/>}
            </div>
          </div>
    )
}

export default CountryComponent