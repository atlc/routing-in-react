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
                                { text: 'See some pictures of me on Google Images!', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${location.name}` },
                                { text: 'See my individual card here!', link: `/locations/${location.id}` },
                                { text: 'See my full JSON data here', link: `${location.url}`},
                                { text: 'JSON link of known residents.', link: `${location.residents}` },
                                { text: 'JSON link of films this location is featured in.', link: `${location.films}`}
                            ]}
                        />
                    </>
                ) : null}
            </CardGroup>
        );
    }
}

export default Locations;