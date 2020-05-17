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
                            { text: 'See some pictures of me on Google Images!', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${vehicle.name}` },
                            { text: 'See my individual card here!', link: `/vehicles/${vehicle.id}` },
                            { text: 'See my full JSON data here', link: `${vehicle.url}`},
                            { text: 'See more about my pilot.', link: `${vehicle.pilot}` },
                            { text: 'See films I am featured in.', link: `${vehicle.films}`}
                        ]}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Vehicle;