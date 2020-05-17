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
                        // Waiting for react router to send these as attrs
                        // JSON of films featured in: ${spec.films}
                        // JSON of characters of this species: ${spec.people}
                        // Full JSON URL: ${spec.url}
                        
                        externalText={'See some pictures of me on Google Images!'}
                        externalLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${spec.name}`}
                        jsonText={'Full JSON about me'}
                        jsonLink={spec.url}
                    />
                ) : null}
            </Col>
        );
    }
}

export default Species;