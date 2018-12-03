import React, { Component } from 'react'
import LocationList from './components/Organisms/LocationList';
import './App.css'

class App extends Component {
  handleSelectedLocation = city =>{
    console.log("handleSelectedLocation", city);
  }
  render () {
    return (
      <div className='App'>
        <LocationList onSelectedLocation={this.handleSelectedLocation}/>
      </div>
    )
  }
}

export default App
