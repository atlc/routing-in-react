import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class VehicleByID extends Component {
    state = {
        vehicle: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/vehicles/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({vehicle: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.vehicle ?
                    <CardDisplay
                        key={this.state.vehicle.id}
                        id={this.state.vehicle.id}
                        title={this.state.vehicle.name}
                        description={this.state.vehicle.description}
                        attributes={
                            `Classification: ${this.state.vehicle.vehicle_class}
                            Length: ${this.state.vehicle.length}
                            `
                        }
                        buttons={[
                            { text: 'Back to Vehicles', link: '/vehicles' },
                            { text: 'Home', link: '/' }
                        ]}
                    />
                : null}
            </CardGroup>
        );
    }
}

export default VehicleByID;