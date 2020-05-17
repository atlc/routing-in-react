import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
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
            <Col>
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
                        buttons={
                            { text: 'See some pictures of me on Google Images!', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${spec.name}` },
                            { text: 'See my individual card here!', link: `/species/${spec.id}` },
                            { text: 'See my full JSON data here', link: `${spec.url}`},
                            { text: 'See characters of my species.', link: `${spec.people}` },
                            { text: 'See films I am featured in.', link: `${spec.films}`}
                        }
                    />
                ) : null}
            </Col>
        );
    }
}

export default Species;