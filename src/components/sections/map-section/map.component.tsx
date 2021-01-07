import React, {useState, useEffect} from 'react'
import styles from './map.module.scss'
import { WorldMap } from "react-svg-worldmap"
import CountryComponent from '~/components/ui/country/country.component'

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
  
  if (data.length !== 0) {
    console.log(data)
  }

    return(
      <div>
        {data.length !== 0 && (
          <>
          <ActiveSlide 
            title={'Live Reports'}
            dataNumber={data[207]}
            dataSecondNumber={data[76]}
            dataThirdNumber={data[42]}
            dataFourthNumber={data[186]}
            dataFifthNumber={data[95]}
            dataSixthNumber={data[100]}
          />
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
        </>
        )}
      </div>
    )
}
  

export default MapSection