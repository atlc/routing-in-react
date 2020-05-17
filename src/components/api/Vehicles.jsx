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
                        buttons={[
                            { text: 'Google Images', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${vehicle.name}` },
                            { text: 'Individual card', link: `/vehicles/${vehicle.id}` },
                            { text: 'Full data (JSON)', link: `${vehicle.url}`},
                            { text: 'Data about my pilot (JSON)', link: `${vehicle.pilot}` },
                            { text: 'Films I am featured in (JSON)', link: `${vehicle.films}`}
                        ]}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Vehicle;