import React, { Component } from 'react';
import CardDisplay from '../CardDisplay';
import CardGroup from 'react-bootstrap/CardGroup';
import 'isomorphic-fetch';
import 'es6-promise';

class FilmByID extends Component {
    state = {
        film: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(res => this.setState({film: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.film ? 
                    <CardDisplay
                        key={this.state.film.id}
                        id={this.state.film.id}
                        title={this.state.film.title}
                        description={this.state.film.description}
                        attributes={
                            `Directed by: ${this.state.film.director}
                            Produced by: ${this.state.film.producer}
                            Release date: ${this.state.film.release_date}
                            Rotten Tomatoes score: ${this.state.film.rt_score}`
                        }
                        buttons={[
                            { text: 'Back to Films', link: '/films' },
                            { text: 'Home', link: '/' }
                        ]}
                    />
                : null}
            </CardGroup>
        );
    }
}

export default FilmByID;