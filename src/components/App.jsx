import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Logo from './Logo';
import Films from './api/Films';
import FilmByID from './api/FilmByID';
import Locations from './api/Locations';
import LocationByID from './api/LocationByID';
import People from './api/People';
import PersonByID from './api/PersonByID';
import Species from './api/Species';
import SpeciesByID from './api/SpeciesByID';
import Vehicles from './api/Vehicles';
import VehicleByID from './api/VehicleByID';

class App extends Component {
    render() {
        return (
            <Container className="text-center">
                <Row>
                    <Router>
                        <>
                            <Link to="/">
                                <Button variant="dark" style={{margin: "10px"}}>Home</Button>
                            </Link>
                            <Link to="/films">
                                <Button variant="dark" style={{margin: "10px"}}>Films</Button>
                            </Link>
                            <Link to="/people">
                                <Button variant="dark" style={{margin: "10px"}}>People</Button>
                            </Link>
                            <Link to="/locations">
                                <Button variant="dark" style={{margin: "10px"}}>Locations</Button>
                            </Link>
                            <Link to="/species">
                                <Button variant="dark" style={{margin: "10px"}}>Species</Button>
                            </Link>
                            <Link to="/vehicles">
                                <Button variant="dark" style={{margin: "10px"}}>Vehicles</Button>
                            </Link>
                            <Switch>
                                <Route exact path="/" component={Logo} />
                                <Route exact path="/films" component={Films} />
                                <Route path="/films/:id" component={FilmByID} />
                                <Route exact path="/people" component={People} />
                                <Route path="/people/:id" component={PersonByID} />
                                <Route exact path="/locations" component={Locations} />
                                <Route path="/locations/:id" component={LocationByID} />
                                <Route exact path="/species" component={Species} />
                                <Route path="/species/:id" component={SpeciesByID} />
                                <Route exact path="/vehicles" component={Vehicles} />
                                <Route exact path="/vehicles/:id" component={VehicleByID} />
                            </Switch>
                        </>
                    </Router>
                </Row>
            </Container>
        );
    }
}

export default App;