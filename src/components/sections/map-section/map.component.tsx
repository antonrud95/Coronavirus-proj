import React, {useState, useEffect} from 'react'
import styles from './map.module.scss'
import { WorldMap } from "react-svg-worldmap"
import CountryComponent from '~/components/ui/country/country.component'

const MapSection = () => {
//   const [results, setResults] = useState([])
//   useEffect(() => {
//     fetch('https://corona.lmao.ninja/v3/covid-19/countries')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setResults(data);
//     });
//   }, [])

//  console.log(results)

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
    console.log(data[0].country)
  }

    return(
      <div>
        {data.length !== 0 && (
          <>
          <CountryComponent 
          flag={data[207].countryInfo.flag}
          country={data[207].country}
          value={data[207].active}
        />
        <CountryComponent 
          flag={data[76].countryInfo.flag}
          country={data[76].country}
          value={data[76].active}
        />
        <CountryComponent 
          flag={data[42].countryInfo.flag}
          country={data[42].country}
          value={data[42].active}
          isDown
        />
        <CountryComponent 
          flag={data[186].countryInfo.flag}
          country={data[186].country}
          value={data[186].active}
        />
        
        <CountryComponent 
          flag={data[95].countryInfo.flag}
          country={data[95].country}
          value={data[95].active}
        />
        <CountryComponent 
          flag={data[100].countryInfo.flag}
          country={data[100].country}
          value={data[100].active}
        />
        </>
        )}
      </div>
    )
}
  

export default MapSection