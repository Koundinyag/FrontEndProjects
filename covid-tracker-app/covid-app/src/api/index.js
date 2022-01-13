import axios from "axios";

const url ="https://rapidapi.com/api-sports/api/covid-193/"

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country){
        changeableUrl = `${url}/countries/${country}`;
    }
    try{
        const {
            data : {confirmed, recovered, deaths, lastUpdate},
        } = await axios.get(changeableUrl);

        return{
            confirmed, 
            recovered,
            deaths,
            lastUpdate,
        };
    }catch(error){
        console.log(error);
    }
};

