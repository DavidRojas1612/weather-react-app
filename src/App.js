import React, { Component } from 'react'
import LocationList from './components/Organisms/LocationList';
import './App.scss'
import ForecastExtended from './components/Molecules/ForecastExtended';

class App extends Component {
  state = {
    city:null
  }

  handleSelectedLocation = city =>{
    console.log("handleSelectedLocation", city);
    this.setState({
      city
    })
  }

  onHandleResetState = () =>{
    this.setState({
      city:null
    })
  }
  
  render () {
    const {city} = this.state
    return (
      <div className='App'>
       {
         !city ? <LocationList onSelectedLocation={this.handleSelectedLocation}/>
         
         :<ForecastExtended city={this.state.city} handleBackpage={this.onHandleResetState} />

       }
      </div>
    )
  }
}

export default App
