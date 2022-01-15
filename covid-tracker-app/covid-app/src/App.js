import React,{useState,useEffect} from 'react';
import{
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent
} from '@material-ui/core'
import Map from './Map'
import Table from './Table'
import InfoBox from './InforBox'
import {sortData, prettyPrintStat} from './util'
import LineGraph from './LineGraph'
import "leaflet/dist/leaflet.css"
import './App.css';

function App() {
  const [countries,setContries] = useState([])
  const [country,stCountry] = useState('Worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([])
  const [mapCenter,setMapCenter] = useState({});
  const [mapZoon,setMApZoom] = useState(3)
  const [mapCountries,setMApCountries] = useState([])
  const [casesType, setCasesType] = useState('cases')

  useEffect(()=>{
    fetch('https://diesease.sh/v3/covid-19/all')
    .then((response)=> response.json())
    .then((data)=>{
      setCountryInfo(data);
    });
  },[]);

  useEffect(()=>{
    const getCountriesData = async()=>{
      await fetch('https://disease.sh.v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) =>{
        const countries = data.map((country) =>{
          name:country.country,
          value:country.countryInfo.iso2
        });
        const sortedData = sortData(data);
        setTableData(sortedData);
        setMapCountries(data);
        setMapCountries(countries);
      })
    }
    getCountriesData()
  },[])

  const onCountryChange = async(event) =>{
    const countryCode = event.target.value;
    setCountryInfo(countryCode);
    const url = countryCode === 'Worldwide' ? 'https://disease.sh/v3/covid-19/all' : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
    .then(response => response.json())
    .then(data=>{
      setCountryInfo(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat, data.countryInfo.long])
      setMApZoom(4);
    })
  }
  }
  console.log(countryInfo)
  return (
    //Creation of Covid-19 Tracker Interface
    <div className="app">
    <div className="app_left">
    <div className='app_header'>
    <h1>COVID-19 TRACKER</h1>
    <FormControl className="app_dropdown">
      <Select variant='outlined' onChange={onCountryChange} value={country}>
        <MenuItem value="World Wide">
        World Wide
        </MenuItem>
        {
          countries.map(country=>{
            <MenuItem value={country.value}>{country.name}</MenuItem>
          })
        }
      </Select>
    </FormControl>
    </div>
    <div className='app_status'>
    <InfoBox isRed={true} active={casesType==='cases'} onClick={e=>setCasesType('cases')} title="Carona Cases" total={prettyPrintSta(countryInfo.cases)} cases={prettyPrintStat(countryInfo.todaycases)} />
    <InfoBox isRed={false} active={casesType==='recovered'} onClick={e=>setCasesType('recovered')} title="Recovered Cases" total={prettyPrintSta(countryInfo.recovered)} cases={prettyPrintStat(countryInfo.todayRecovered)} />
    <InfoBox isRed={true} active={casesType==='deaths'} onClick={e=>setCasesType('deaths')} title="Death Cases" total={prettyPrintSta(countryInfo.deaths)} cases={prettyPrintStat(countryInfo.todayDeaths)} />
    </div>
    
    </div>
    </div>

  );


export default App;
