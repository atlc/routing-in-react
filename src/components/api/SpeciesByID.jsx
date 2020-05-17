import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class SpeciesByID extends Component {
    state = {
        species: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/species/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({species: res}))
    }

    render() {
        return (
            <Col>
                {this.state.species ?
                    <CardDisplay
                        key={this.state.species.id}
                        id={this.state.species.id}
                        title={this.state.species.name}
                        description={`"${this.state.species.name}" is characterized as "${this.state.species.classification}".`}
                        attributes={
                            `Known eye colors: ${this.state.species.eye_colors}
                            Known hair colors: ${this.state.species.hair_colors}
                            `
                        }
                        buttons={[
                            { text: 'Back to Species', link: '/species' },
                            { text: 'Home', link: '/' }
                        ]}
                    />
                : null}
            </Col>
        );
    }
}

export default SpeciesByID;