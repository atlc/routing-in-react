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
                    <>
                        <CardDisplay
                            key={location.id}
                            id={location.id}
                            title={location.name}
                            description={`${location.climate} Climate; ${location.terrain} Terrain `}
                            attributes={
                                `Surface water percentage: ${location.surface_water}%
                                `
                            }
                            buttons={[
                                { text: 'Google Images', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${location.name}` },
                                { text: 'Individual card', link: `/locations/${location.id}` },
                                { text: 'Full data (JSON)', link: `${location.url}`},
                                { text: 'Known residents (JSON)', link: `${location.residents}` },
                                { text: 'Films this location is featured in (JSON)', link: `${location.films}`}
                            ]}
                        />
                    </>
                ) : null}
            </CardGroup>
        );
    }
}

export default Locations;