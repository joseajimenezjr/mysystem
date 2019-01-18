import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Lock  from './mainlock';
//import apiKey  from './mytokeninfo';


class LockDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: "devices"
          }
    }

      componentDidMount(){
       
      }



    render() {


     return (
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="6">
            <Lock color="success" header='Home' mainText="Home Lock" smallText="small text here" />
          </Col>  
        </Row>
        </div>
        );
      }
    }
    
    export default LockDevice;