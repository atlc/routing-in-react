import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
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

                            externalText={'See some pictures of me on Google Images!'}
                            externalLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${location.name}`}
                            jsonText={'See my individual card here!'}
                            jsonLink={`/locations/${location.id}`}
                        />
                        <a href={location.residents} variant={'dark'} style={{margin: "5px"}}>JSON link of known residents</a>
                        <a href={location.films} variant={'dark'} style={{margin: "5px"}}>JSON link of films featured in</a>
                    </>
                ) : null}
            </CardGroup>
        );
    }
}

export default Locations;