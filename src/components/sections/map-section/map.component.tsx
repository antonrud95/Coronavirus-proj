import React, {useState, useEffect} from 'react'
import styles from './map.module.scss'
import {Container} from 'react-bootstrap'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import useMapAssets from '~/hooks/queries/useMapAssets'

import ActiveSlide from '~/components/ui/active/active.component'

const MapSection = () => {
  const API = 'https://corona.lmao.ninja/v3/covid-19/countries'
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const request = fetch(API);
      const response = await request;
      const parsed = await response.json();
      setData(parsed);
    }
    getData();

  }, []);

  if(data.length !==0) {
    console.log(data)
  }
  
  const [isLive, setIsLive] = useState(true)
  const [isRecovered, setIsRecovered] = useState(false)

  const [inputValue, setInputValue] = useState('')

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
  }

  const onFilteredCountry = data.filter(item => {
   return inputValue !== '' ? item.country.includes(inputValue) : null
  })

  const recoveredSwap = () => {
    setIsRecovered(true)
    setIsLive(false)
  }
  const liveSwap = () => {
    setIsRecovered(false)
    setIsLive(true)
  }

  const [onSearch, setOnSearch] = useState(false);

  const shownInputField = () => {
    setOnSearch(!onSearch)
    setInputValue('')
  }

  const {mapBg} = useMapAssets()
    return(
      <Container className={styles.mapContainer}>
        {data.length !== 0 && (
          <div className={styles.wrapperData}>
            <div className={styles.btnWrapper}>
              <button className={styles.btn}><FontAwesomeIcon icon={faChevronLeft} onClick={liveSwap} style={!isLive ? {color: '#F44A45'} : {color: '#A2A5B2'}} className={styles.arrowLeft}/></button>
              <button className={styles.btn}><FontAwesomeIcon icon={faChevronRight} onClick={recoveredSwap} className={styles.arrowRight} style={!isRecovered ? {color: '#F44A45'} : {color: '#A2A5B2'}}/></button>
            </div>
            {isLive ? (
              <ActiveSlide 
              title={'Live Reports'}
              dataNumber={data[207]}
              dataSecondNumber={data[76]}
              dataThirdNumber={data[42]}
              dataFourthNumber={data[186]}
              dataFifthNumber={data[95]}
              dataSixthNumber={data[100]}
            />
            ) : null}
            {isRecovered ? (
              <ActiveSlide 
              title={'Recovered'}
              dataNumber={data[207]}
              dataSecondNumber={data[76]}
              dataThirdNumber={data[42]}
              dataFourthNumber={data[186]}
              dataFifthNumber={data[95]}
              dataSixthNumber={data[100]}
              isRecover
            />
            ) : null}
        </div>
        )}
        <Img fluid={mapBg.childImageSharp.fluid} className={styles.mapBg}/>
        {!onSearch ? <div className={styles.searchWrapper}><FontAwesomeIcon icon={faSearch} onClick={shownInputField} className={styles.search}/></div> : <input onChange={onChangeInput} onBlur={shownInputField} className={styles.inputStyles}/>}
        <div className={styles.countriesWindow}>
          {onFilteredCountry.map((item) => {
            return(
              <div key={Math.random()} className={styles.countryWrapper}>
                <p className={styles.filteredCountry}>Country: {item.country}</p>
                <img src={item.countryInfo.flag} className={styles.filteredImage}/>
                <p className={styles.filteredCases}>Cases: {item.cases}</p>
                <p className={styles.filteredRecovered}>Recovered: {item.recovered}</p>
              </div>
            )
          })}
        </div>
      </Container>
    )
}
  

export default MapSection