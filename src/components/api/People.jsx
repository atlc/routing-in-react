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
                        buttons={[
                            { text: 'Google Images', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${person.name}` },
                            { text: 'Individual card', link: `/people/${person.id}` },
                            { text: 'Full data (JSON)', link: `${person.url}`},
                            { text: 'More about my species (JSON)', link: `${person.species}` },
                            { text: 'Films I am featured in (JSON)', link: `${person.films}`}
                        ]}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default People;