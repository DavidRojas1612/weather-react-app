import React, { Component } from "react";
import "./LocationList.scss";
import WeatherLocation from "./WeatherLocation";
import { getUrlWeatherByCity } from "../../providers/getUrlWeatherByCity";
import Loader from "../Atoms/Loader";
import PropTypes from "prop-types"

const cities = [3688689, 3674962, 3687925, 6542283, 6539761, 4379545];

class LocationList extends Component {
  state = {
    data: null,
    loading: true
  };

  handleUpdateData = () => {
    const apiUrl = getUrlWeatherByCity(cities);
    fetch(apiUrl)
      .then(resolve => {
        return resolve.json();
      })
      .then(data => {
        this.setState({
          data: data.list,
          loading: false
        });
      })
      .catch(e => console.log(e));
  };

  handleWeatherLocationClick = city =>{
    console.log("hanldeWatherlocationClick")
    this.props.onSelectedLocation(city)
  }

  getWeatherCities = data => {
    return data.map(city => 
      <WeatherLocation 
        onWeatherLocationClick={()=> this.handleWeatherLocationClick(city.name)} 
        key={city.id} 
        city={city} 
      />);
  };

  componentDidMount() {
    this.handleUpdateData();
  }

  render() {
    const { data, loading } = this.state;
    return (
      <div className="ListContainer">
        {data && this.getWeatherCities(data)}
        {loading && <Loader />}
      </div>
    );
  }
}
Location.propTypes = {
  onSelectedLocation: PropTypes.func,
}
export default LocationList;
