import React from 'react'
import {Cards, Chart} from './components'
import styles from './App.module.css'
import {fetchData} from './api/index'

//Here We are using the Class based components because whenever we are using the asynchronous calls, Class based components perfroms the best when compared to the functional based components


class App extends React.Component{
    state = {
        data: {},
    }
    async componentDidMount(){
        const data = await fetchData();
        this.setState({data})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }

    render(){
        const {data} = this.state;
        return(
            <div className={styles.container}>
                <h1 style={{textAlign:'center'}}>Covid 19 Application</h1>
                <Cards data={data}/>
                <Chart data={data} />
               </div>

        )
    }
}

export default  App;