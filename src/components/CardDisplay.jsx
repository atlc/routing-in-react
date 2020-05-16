import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardDisplay extends Component {
    render() {
        return (
            <Col>
                <Card className='text-center' style={{marginTop: "5px", marginBottom: "15px"}}>
                    <img src={require('../assets/logo.png')} style={{maxWidth: '90vw'}} alt='The Studio Ghibli logo' />
                    <hr />
                    <Card.Body>
                    <Card.Title className='font-weight-bold'>{this.props.title}</Card.Title>
                    <Card.Title className='text-muted'>ID: {this.props.id}</Card.Title>
                    <hr />
                    <Card.Text>
                        {this.props.description}
                        {this.props.attributes ? <hr /> : ''}
                        {this.props.attributes ? this.props.attributes.split('\n').map((attr, i) => <span key={i}>{attr}<br /></span>) : ''}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={this.props.externalLink} variant={'dark'}>
                            {this.props.externalText}
                        </Button>
                        <Button href={this.props.jsonLink} variant={'dark'}>
                            {this.props.jsonText}
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default CardDisplay;