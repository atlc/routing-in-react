import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class LocationByID extends Component {
    state = {
        location: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/locations/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({location: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.location ?
                    <CardDisplay
                        key={this.state.location.id}
                        id={this.state.location.id}
                        title={this.state.location.name}
                        description={`${this.state.location.climate} Climate; ${this.state.location.terrain} Terrain`}
                        attributes={
                            `Surface water percentage: ${this.state.location.surface_water}%
                            `
                        }
                        buttons={[
                            { text: 'Back to Locations', link: '/locations' },
                            { text: 'Home', link: '/' }
                        ]}
                    />
                : null}
            </CardGroup>
        );
    }
}

export default LocationByID;