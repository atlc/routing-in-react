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
                            <a href=${this.state.location.residents}>JSON link of known residents</a>
                            <a href=${this.state.location.films}>JSON link of films featured in</a>
                            `
                        }
                        externalText={'See some pictures of me on Google Images!'}
                        externalLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${this.state.location.name}`}
                        jsonText={'See my full JSON from the Ghibli API here!'}
                        jsonLink={this.state.location.url}
                    />
                : null}
            </CardGroup>
        );
    }
}

export default LocationByID;