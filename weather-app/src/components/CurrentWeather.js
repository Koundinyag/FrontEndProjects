  
import React from "react";

class CurrentWeather extends React.Component {
  render() {
    const temperature = this.props.temp;
      return(
          <div className="current-weather">
          <div className="current-weather_content">
            <p className="current-weather_temp">{temperature}</p>
            <p className="current-weather_description">Sunny</p>
  
            
          </div>
          <div ><p className="current-weather_feels-like"> Feels Like</p></div>
          </div>
      );
  }
}
export default CurrentWeather;