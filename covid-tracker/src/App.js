import * as React from "react";
import { useState, useEffect } from "react";
import {MenuItem,
  FormControl,
  Select,
  CardContent,
  Card
} from '@mui/material';
import InfoBox from './InforBox';
import './App.css';
import Table from "./Table"
import {sortData} from './util'; 
import "leaflet/dist/leaflet.css";
import Map from "./Map"


function App() {
const [countries, setCountries] = useState([]);
const [country,setCountry] = useState('worldwide');
const [countryInfo, setCountryInfo]  = useState({});
const [tableData, setTableData] = useState([]);

useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/all")
  .then(response => response.json())
  .then(data => {
    setCountryInfo(data);
  })
})
// STATE = How to write a variable in REACT <<<<<<<
//https://disease.sh/v3/covid-19/countries

//USEEFFECT = runs a piece of code
//Based on given Conditions
useEffect(() => {
  //async -> send a request, wait for it, do some job with it.

  const getCountriesData = async() => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) =>({
        name: country.country,// United State, United Kingdom
        value: country.countryInfo.iso2, //UK, USA,FR
      }));

      const sortedData = sortData(data);
      setCountries(countries);
      setTableData(sortedData);
    });
  };
  getCountriesData();
}, []);

const onCountryChange = async(event) => {
const countryCode = event.target.value;
const url = countryCode === 'worldwide' ? `https://diesease.sh/v3/covid-19/all` : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
 await fetch(url)
  .then(response => response.json())
  .then((data) =>{
    setCountryInfo(data);
    //All of the Data from the country response
    setCountry(countryCode);
  });
};

console.log("COUNTRY INFO >>>", countryInfo);

  return (
    <div className="app" >
    <div className="app_left">    
    <div className="app_header" >
    <h1>Covid Tracker</h1>
    <FormControl className="app_dropdown">
    <Select variant="outlined" value={country} onChange={onCountryChange}>
    <MenuItem value="worldwide">WorldWide</MenuItem>
    {
      countries.map((country) => (
        <MenuItem value={country.value}> {country.name}</MenuItem>
      ))
    }
    </Select>
    </FormControl>
    </div>
    <div className="app_status">
      <InfoBox title="Caronavirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
      <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered}/>
      <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>  
    </div>
  {/*Table*/}
  {/*Map*/}
  <Map/>
    </div>
    <Card className="app_right">
    <CardContent>
    <h3> Live Cases By Country</h3>
    <Table countries={tableData}/>
    <h3>Worldwide New Cases</h3>
    </CardContent>
    </Card>
    </div>   
  );

}


export default App;
