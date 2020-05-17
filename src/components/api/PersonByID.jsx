import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class PersonByID extends Component {
    state = {
        person: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({person: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.person ?
                    <CardDisplay
                        key={this.state.person.id}
                        id={this.state.person.id}
                        title={this.state.person.name}
                        description={`${this.state.person.name} is a ${this.state.person.gender}, with an age approximated of ${this.state.person.age}.`}
                        attributes={
                            `Eye color: ${this.state.person.eye_color}
                            Hair color: ${this.state.person.hair_color}
                            `
                        }
                        buttons={[
                            { text: 'Back to People', link: '/people' },
                            { text: 'Home', link: '/' }
                        ]}
                    />
                : null}
            </CardGroup>
        );
    }
}

export default PersonByID;