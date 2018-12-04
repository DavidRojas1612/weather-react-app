import React, { Component, Fragment } from 'react'
import ForecastExtended from '../Organisms/ForecastExtended';
import LocationList from '../Organisms/LocationList';
import Loader from '../Atoms/Loader';
import { getUrlWeatherByCity } from '../../providers/getUrlWeatherByCity';

const cities = [3688689, 3674962, 3687925, 6542283, 6539761, 4379545];

class Dashboard extends Component {
    state = {
        city: null,
        data: null,
        loading: false
    }

    handleSelectedLocation = city => {
        this.setState({
            city
        })
    }
    onHandleResetState = () => {
        this.setState({
            city: null
        })
    }

    handleUpdateData = () => {
        const apiUrl = getUrlWeatherByCity(cities);
        this.setState({
            loading: true
        })
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

    componentDidMount() {
        this.handleUpdateData();
    }

    render() {
        const { city, data, loading } = this.state
        return (
            <div>
                {
                    data &&
                    <Fragment>
                        {
                            !city ? <LocationList onSelectedLocation={this.handleSelectedLocation} data={data} />
                                : <ForecastExtended city={city} handleBackpage={this.onHandleResetState} />
                        }
                    </Fragment>

                }
                {
                    loading && <Loader />
                }
            </div>
        );
    }
}


export default Dashboard;