import React from 'react'
import styles from './active.module.scss'
import CountryComponent from '~/components/ui/country/country.component'
import FC from '~/types/fc'

interface Props {
    title: string
    dataNumber: any
    dataSecondNumber: any
    dataThirdNumber: any
    dataFourthNumber: any
    dataFifthNumber: any
    dataSixthNumber: any
    isRecover?: boolean
}

    const ActiveSlide: FC<Props> = ({title, dataNumber, dataSecondNumber, dataThirdNumber, dataFourthNumber, dataFifthNumber, dataSixthNumber, isRecover}) => {
    return(
        <div>
            <h2>{title}</h2>
            <CountryComponent 
            flag={dataNumber.countryInfo.flag}
            country={dataNumber.country}
            value={isRecover ? dataNumber.recovered : dataNumber.active}
            />
            <CountryComponent 
            flag={dataSecondNumber.countryInfo.flag}
            country={dataSecondNumber.country}
            value={isRecover ? dataSecondNumber.recovered : dataSecondNumber.active}
            />
            <CountryComponent 
            flag={dataThirdNumber.countryInfo.flag}
            country={dataThirdNumber.country}
            value={isRecover ? dataThirdNumber.recovered : dataThirdNumber.active}
            isDown
            />
            <CountryComponent 
            flag={dataFourthNumber.countryInfo.flag}
            country={dataFourthNumber.country}
            value={isRecover ? dataFourthNumber.recovered : dataFourthNumber.active}
            />
            
            <CountryComponent 
            flag={dataFifthNumber.countryInfo.flag}
            country={dataFifthNumber.country}
            value={isRecover ? dataFifthNumber.recovered : dataFifthNumber.active}
            />
            <CountryComponent 
            flag={dataSixthNumber.countryInfo.flag}
            country={dataSixthNumber.country}
            value={isRecover ? dataSixthNumber.recovered : dataSixthNumber.active}
            />
        </div>
    )
}

export default ActiveSlide