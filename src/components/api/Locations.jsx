import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class Locations extends Component {
    state = {
        locations: null
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(res => res.json())
            .then(res => this.setState({locations: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.locations ? this.state.locations.map(location =>
                    <CardDisplay
                        key={location.id}
                        id={location.id}
                        title={location.name}
                        description={`${location.climate} Climate; ${location.terrain} Terrain `}
                        attributes={
                            `Surface water percentage: ${location.surface_water}%
                            `
                        }
                        // Waiting for react router to send these as attrs
                        // JSON of known residents: ${location.residents}
                        // JSON of films featured in: ${location.films}
                        // Full JSON URL: ${location.url}

                        buttonText={'See some pictures of me on Google Images!'}
                        buttonLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${location.name}`}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Locations;