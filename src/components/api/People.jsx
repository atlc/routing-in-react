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
                            { text: 'See some pictures of me on Google Images!', link: `https://www.google.com/search?tbm=isch&q=studio+ghibli+${person.name}` },
                            { text: 'See my individual card here!', link: `/people/${person.id}` },
                            { text: 'See my full JSON data here', link: `${person.url}`},
                            { text: 'See more about my species.', link: `${person.species}` },
                            { text: 'See films I am featured in.', link: `${person.films}`}
                        ]}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default People;