import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Widget01  from './Widget01';
import mytokenapi  from '../../mytoken';


//import { resolve } from 'path';

class CameraDevice extends Component {


    constructor(props) {
        super(props);
        this.state = {
          newImgFetch: false,
          isLoading: true,
          cameraObject : [
            {
            "device_type":"camera",
            "device_id":27012,
            "type":"white",
            "updated_at":"",
            "name":"Main Entrance",
            "active":"disabled",
            "notifications":1,
            "warning":0,
            "error_msg":"",
            "status":"done",
            "enabled":false,
            "armed":true,
            "errors":0,
            "wifi_strength":5,
            "lfr_strength":3,
            "temp":72,
            "battery":3,
            "battery_state":"ok",
            "usage_rate":false,
            "thumbnail":''
            },
            {
            "device_type":"camera",
            "device_id":27042,
            "type":"white",
            "updated_at":"",
            "name":"Living Room",
            "active":"disabled",
            "notifications":1,
            "warning":0,
            "error_msg":"",
            "status":"done",
            "enabled":false,
            "armed":true,
            "errors":0,
            "wifi_strength":4,
            "lfr_strength":4,
            "temp":71,
            "battery":3,
            "battery_state":"ok",
            "usage_rate":false,
            "thumbnail":''
            },
            {
            "device_type":"camera",
            "device_id":27067,
            "type":"white",
            "updated_at":"",
            "name":"Backdoor",
            "active":"disabled",
            "notifications":1,
            "warning":0,
            "error_msg":"",
            "status":"done",
            "enabled":false,
            "armed":true,
            "errors":0,
            "wifi_strength":5,
            "lfr_strength":3,
            "temp":72,
            "battery":3,
            "battery_state":"ok",
            "usage_rate":false,
            "thumbnail":''
            },
            {
            "device_type":"camera",
            "device_id":244362,
            "type":"xt",
            "updated_at":"",
            "name":"Backyard",
            "active":"armed",
            "notifications":1
            ,"warning":0,
            "error_msg":"",
            "status":"done",
            "enabled":true,
            "armed":true,
            "errors":0,
            "wifi_strength":3,
            "lfr_strength":4,
            "temp":25,
            "battery":3,
            "battery_state":"ok",
            "usage_rate":false,
            "thumbnail":''
            },
            {
            "device_type":"camera",
            "device_id":244420,
            "type":"xt",
            "updated_at":"",
            "name":"Driveway",
            "active":"armed",
            "notifications":1,
            "warning":0,
            "error_msg":"",
            "status":"done",
            "enabled":true,
            "armed":true,
            "errors":0,
            "wifi_strength":5,
            "lfr_strength":5,
            "temp":25,
            "battery":3,
            "battery_state":"ok",
            "usage_rate":false
            }
        ],
          tokenInfo:[]
        }
       };


      componentDidMount(){
        var cameraLoginUrl = 'https://67.83.21.5:80/api/auth/camera';
        fetch(cameraLoginUrl, {
          method: 'GET',
          headers:{
            'x-access-token': mytokenapi
          }
        }).then(res => res.json())
        .then(response => {
          this.setState({tokenInfo:response.authtoken.authtoken})
            var cameraObjectUrl = 'https://67.83.21.5:8080/https://rest-u002.immedia-semi.com/homescreen';
            fetch(cameraObjectUrl, {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'locale': 'en_US',
                'accept': '*/*',
                'app-build': 'IOS_3472',
                'token-auth': this.state.tokenInfo,
                'accept-language': 'en-US, es-MX',
                'accept-encoding': 'br, gzip, deflate'
              }
            }).then(res => res.json())
            .then(response => {
              response.devices.splice(5);
              for(var i = 0; i < response.devices.length; i++ ){
                response.devices[i].thumbnail = "https://67.83.21.5:8080/https://rest-u002.immedia-semi.com/"+ response.devices[i].thumbnail+".jpg"
              }
              this.setState({cameraObject:response.devices})
              this.setState({isLoading:false})
              console.log(this.state);
           })
          .catch(error => console.error('Error:', error))
        })
        .catch(error => console.error('Error:', error)) 
      }
      

    render() {
        return (
          <div className="animated fadeIn">
          {console.log(this.state)}
          <Row>
             <Col xs="12" sm="6" lg="4" key={this.state.cameraObject[0].device_id}><Widget01 isLoading={this.state.isLoading} state={this.state} color="success" index='0' deviceID={this.state.cameraObject[0].device_id} header={'Main Entrance'} img={this.state.cameraObject[0].thumbnail} token={this.state.tokenInfo} picturestatusupdate={this.pictureStatusHandler}/></Col>
             <Col xs="12" sm="6" lg="4" key={this.state.cameraObject[1].device_id}><Widget01 isLoading={this.state.isLoading} state={this.state} color="success" index='1' deviceID={this.state.cameraObject[1].device_id} header={'Family Room'} img={this.state.cameraObject[1].thumbnail} token={this.state.tokenInfo} picturestatusupdate={this.pictureStatusHandler}/></Col>
             <Col xs="12" sm="6" lg="4" key={this.state.cameraObject[2].device_id}><Widget01 isLoading={this.state.isLoading} state={this.state} color="success" index='2' deviceID={this.state.cameraObject[2].device_id} header={'Living Room'} img={this.state.cameraObject[2].thumbnail} token={this.state.tokenInfo} picturestatusupdate={this.pictureStatusHandler}/></Col>
             <Col xs="12" sm="6" lg="4" key={this.state.cameraObject[3].device_id}><Widget01 isLoading={this.state.isLoading} state={this.state} color="success" index='3' deviceID={this.state.cameraObject[3].device_id} header={'Backyard'} img={this.state.cameraObject[3].thumbnail} token={this.state.tokenInfo} picturestatusupdate={this.pictureStatusHandler}/></Col>
             <Col xs="12" sm="6" lg="4" key={this.state.cameraObject[4].device_id}><Widget01 isLoading={this.state.isLoading} state={this.state} color="success" index='4' deviceID={this.state.cameraObject[4].device_id} header={'Driveway'} img={this.state.cameraObject[4].thumbnail} token={this.state.tokenInfo} picturestatusupdate={this.pictureStatusHandler}/></Col>
             </Row>
          </div>
        );
      }
    }
    export default CameraDevice;