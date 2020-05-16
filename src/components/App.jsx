import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Logo from './Logo';
import Films from './api/Films';
import FilmByID from './api/FilmByID';
import Locations from './api/Locations';
import People from './api/People';
import Species from './api/Species';
import Vehicles from './api/Vehicles';

class App extends Component {
    state = {
        isInitialLoad: true
    }

    render() {
        return (
            <Container fluid className="text-center">
                <Row>
                    <Router>
                        <>
                            <Link to="/">
                                <Button variant="info" style={{margin: "10px"}}>Home</Button>
                            </Link>
                            <Link to="/films">
                                <Button variant="info" style={{margin: "10px"}}>Films</Button>
                            </Link>
                            <Link to="/people">
                                <Button variant="info" style={{margin: "10px"}}>People</Button>
                            </Link>
                            <Link to="/locations">
                                <Button variant="info" style={{margin: "10px"}}>Locations</Button>
                            </Link>
                            <Link to="/species">
                                <Button variant="info" style={{margin: "10px"}}>Species</Button>
                            </Link>
                            <Link to="/vehicles">
                                <Button variant="info" style={{margin: "10px"}}>Vehicles</Button>
                            </Link>
                            <Switch>
                                <Route exact path="/" component={Logo} />
                                <Route exact path="/films" component={Films} />
                                <Route path="/films/:id" component={FilmByID} />
                                <Route exact path="/people" component={People} />
                                <Route exact path="/locations" component={Locations} />
                                <Route exact path="/species" component={Species} />
                                <Route exact path="/vehicles" component={Vehicles} />
                            </Switch>
                        </>
                    </Router>
                </Row>
            </Container>
        );
    }
}

export default App;