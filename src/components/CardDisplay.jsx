import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardDisplay extends Component {
    render() {
        return (
            <Col sm={2} md={4} lg={3} xl={3} >
                <Card className='text-center' style={{marginTop: "5px", marginBottom: "15px"}}>
                    <img src={require('../assets/logo.png')} style={{maxWidth: '90vw'}} alt='The Studio Ghibli logo' />
                    <hr />
                    <Card.Body>
                    <Card.Title className='font-weight-bold'>{this.props.title}</Card.Title>
                    <Card.Title className='text-muted' style={{fontSize: "0.7em"}}>ID: {this.props.id}</Card.Title>
                    <hr />
                    <div>
                        {this.props.description}
                        <hr />
                        {this.props.attributes ? this.props.attributes.split('\n').map((attr, i) => <span key={i}>{attr}<br /></span>) : ''}
                    </div>
                    </Card.Body>
                    <Card.Footer>
                        {this.props.buttons ? this.props.buttons.map((button, i) =>
                            <Button key={i} href={button.link} variant={'dark'} style={{margin: "5px"}}>{button.text}</Button>
                        ) : null}
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default CardDisplay;