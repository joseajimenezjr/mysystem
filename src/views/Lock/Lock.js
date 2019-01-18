import React, { Component } from 'react';
//import Lock from './device/mainlock';
//import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';
import LockDevice from './device/device'

//const starter = this.state.lights

class LockPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      lights: [],
      isLoading: false,
    };
  }

  
 
  render() {
    return (
      <div>
      <h1> Door Lock Page </h1>
      <LockDevice/>
      </div>
    )
  }
}

export default LockPage;
