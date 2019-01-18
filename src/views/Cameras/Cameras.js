import React, { Component } from 'react';
import CameraDevice from './cameras/device';
//import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';


//const starter = this.state.lights

class Cameras extends Component {
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
      <h1> Cameras page </h1>
      <CameraDevice/>
      </div>
    )
  }
}

export default Cameras;
