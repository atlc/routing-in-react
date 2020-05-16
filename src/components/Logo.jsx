import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import logoImg from '../assets/logo.png';

class Logo extends Component {
    render() {
        return <Image src={logoImg} rounded fluid />
    }
}

export default Logo;