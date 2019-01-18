import React, { Component } from 'react';
import ThermoDevice from './thermostat/device';
//import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';


//const starter = this.state.lights

class Thermostat extends Component {
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
      <h1> Thermostat page </h1>
      <ThermoDevice/>
      </div>
    )
  }
}

export default Thermostat;
