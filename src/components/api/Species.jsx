import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class Species extends Component {
    state = {
        species: null
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/species')
            .then(res => res.json())
            .then(res => this.setState({species: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.species ? this.state.species.map(spec =>
                    <CardDisplay
                        key={spec.id}
                        id={spec.id}
                        title={spec.name}
                        description={`"${spec.name}" is characterized as "${spec.classification}".`}
                        attributes={
                            `Known eye colors: ${spec.eye_colors}
                            Known hair colors: ${spec.hair_colors}
                            `
                        }
                        buttons={[
                            { text: 'Google Images', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${spec.name}` },
                            { text: 'Individual card', link: `/species/${spec.id}` },
                            { text: 'Full data (JSON)', link: `${spec.url}`},
                            { text: 'Characters of my species (JSON)', link: `${spec.people}` },
                            { text: 'Films I am featured in (JSON)', link: `${spec.films}`}
                        ]}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Species;