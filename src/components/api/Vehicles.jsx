import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class Vehicle extends Component {
    state = {
        vehicles: null
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/vehicles')
            .then(res => res.json())
            .then(res => this.setState({vehicles: res}))
    }

    render() {
        debugger;
        return (
            <CardGroup>
                {this.state.vehicles ? this.state.vehicles.map(vehicle =>
                    <CardDisplay
                        key={vehicle.id}
                        id={vehicle.id}
                        title={vehicle.name}
                        description={vehicle.description}
                        attributes={
                            `Classification: ${vehicle.vehicle_class}
                            Length: ${vehicle.length}
                            `
                        }
                        // Waiting for react router to send these as attrs
                        // JSON of films featured in: ${vehicle.films}
                        // JSON of this vehicle's pilot: ${vehicle.pilot}
                        // Full JSON URL: ${vehicle.url}

                        buttonText={'See some pictures of me on Google Images!'}
                        buttonLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${vehicle.name}`}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Vehicle;