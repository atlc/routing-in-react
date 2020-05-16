import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';
import 'isomorphic-fetch';
import 'es6-promise';

class Films extends Component {
    state = {
        films: null
    }

    componentDidMount() {
        fetch(`https://ghibliapi.herokuapp.com/films${this.props.match.params.id ? '/'+this.props.match.params.id : '/'}`)
            .then(res => res.json())
            .then(res => this.setState({films: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.films ? this.state.films.map(film =>
                    <CardDisplay
                        key={film.id}
                        id={film.id}
                        title={film.title}
                        description={film.description}
                        attributes={
                            `Directed by: ${film.director}
                            Produced by: ${film.producer}
                            Release date: ${film.release_date}
                            Rotten Tomatoes score: ${film.rt_score}`
                        }
                        externalText={'See more info in an IMDB search!'}
                        externalLink={`https://www.imdb.com/find?q=${film.title}+${film.release_date}`}
                        jsonText={'See my individual card here!'}
                        jsonLink={`/films/${film.id}`}
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Films;