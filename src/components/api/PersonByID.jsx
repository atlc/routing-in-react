import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class People extends Component {
    state = {
        people: null
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(res => this.setState({people: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.people ? this.state.people.map(person =>
                    <CardDisplay
                        key={person.id}
                        id={person.id}
                        title={person.name}
                        description={`${person.name} is a ${person.gender}, with an age approximated of ${person.age}.`}
                        attributes={
                            `Eye color: ${person.eye_color}
                            Hair color: ${person.hair_color}
                            `
                        }
                        // Waiting for react router to send these as attrs
                        // JSON of films featured in: ${person.filmss}
                        // JSON of person's species: ${person.species}
                        // Full JSON URL: ${person.url}

                        externalText={'See some pictures of me on Google Images!'}
                        externalLink={`https://www.google.com/search?tbm=isch&q=studio+ghibli+${person.name}`}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default People;