import React from 'react'

class CurrentWeather extends React.Component{
    render(){
        const url = 'url="http://http://openweathermap.org/img/wn/${this.props.icon}@4x.png'
        return(
            <div className='current-weather'>
            <div className='current-weather_content'>
            <p className='current-weather_temp'>{this.props.currentTemperature}</p>
            <p className='current-weather_temp_description'>{this.props.description}</p>
            <img className = "current-wather_icon" 
            url={url} 
            alt={this.props.description}
            />
            </div>
            <div>
            <p className='current-weather_feels_like'>
            Feels Like {this.props.feelsLike}
            </p>          

            </div>
            </div>
        )
    }
}

export default CurrentWeather;