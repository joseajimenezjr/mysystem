import React, { Component } from 'react';
//import mytokenId from './mytokeninfo';
import Widget01 from './Widget01';
import {Col, Row } from 'reactstrap';
import mytokenapi  from '../../mytoken';


const myLightsData = {
    "deviceList":[
             {"brandName":"TP-Link","fwVer":"1.5.2 Build 171208 Rel.114610","deviceName":"Smart Wi-Fi Light Switch","status":null,"alias":"Living Room","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"AC84C65E46D7","role":0,"isSameRegion":true,"hwId":"12657950800085A27A64E9E775C8A7A7","fwId":"00000000000000000000000000000000","oemId":"4748FB6E209D782A854A4B5AEDC89284","deviceId":"8006733AFA98F3E63041EE1A0C6EE1351A13ABEA","deviceHwVer":"2.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Driveway","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BFA6A628","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"8006C62B2D07128E22AA109DA50DF6D6189F433E","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Island","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF1813FC","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"8006AE0F29F6862B26D22F879A1B658B17D617D5","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.1.0 Build 160521 Rel.085826","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"2nd Floor Hallway","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"704F57F996CE","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"DB4F3246CD85AA59CAE738A63E7B9C34","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"8006B8A316B8D0AF1FAA53E4A57DD4B5194B707C","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.5.1 Build 171109 Rel.165709","deviceName":"Smart Wi-Fi Plug","status":null, "alias":"Christmas Tree","deviceType":"IOT.SMARTPLUGSWITCH", "appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS100(US)", "deviceMac":"704F57998A5C","role":0,"isSameRegion":true,"hwId":"0DC28CDD0B7E6C55F52AD35B8B68277E","fwId":"00000000000000000000000000000000","oemId":"80CB8C7ED4CAD7DA4570979BFF731BA1","deviceId":"800691B3744BC0AD9E9D7E4B0DF595D31937E346","deviceHwVer":"2.0"},
             {"brandName":"TP-Link","fwVer":"1.5.1 Build 171109 Rel.165709","deviceName":"Smart Wi-Fi Plug","status":null,"alias":"Under Cabinets","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS100(US)","deviceMac":"704F57998A3A","role":0,"isSameRegion":true,"hwId":"0DC28CDD0B7E6C55F52AD35B8B68277E","fwId":"00000000000000000000000000000000","oemId":"80CB8C7ED4CAD7DA4570979BFF731BA1","deviceId":"80061D82CD7015E12A2C8CB9F07FCB0E19371F1D","deviceHwVer":"2.0"},
             {"brandName":"TP-Link","fwVer":"1.5.2 Build 171208 Rel.114610","deviceName":"Smart Wi-Fi Light Switch","status":null,"alias":"Cats Office","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"AC84C65E4373","role":0,"isSameRegion":true,"hwId":"12657950800085A27A64E9E775C8A7A7","fwId":"00000000000000000000000000000000","oemId":"4748FB6E209D782A854A4B5AEDC89284","deviceId":"8006AA9548CDF3901A4217C771ECA8151A12C66C","deviceHwVer":"2.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Porch","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF17F9C9","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80065DFC30AD398D3CF7E06FD5CFDE8A17D5CC5F","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Foyer","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF10BB20","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80068EBC1121D929E4F8108E9B677AC217BF3952","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Emerys Bedroom","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BFECC602","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80068247678C800DB2299067D7C2307018D01098","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Kitchen","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF17FB06","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80068178B3BB88C8A479C22411A48ACC17D58252","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Sink","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BFA6ABE7","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80062BA4CDAE3AEFF5278E78A8F35E75189F32B6","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Backyard","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BFA6B1C5","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"80061D8CE67171F2E7F3A192EE4C7907189F0345","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Family Fan","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF10BD41","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"8006DE10C4DD8CB8C6A1F2AFEF407EEA17BF2CF8","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.2.5 Build 171206 Rel.090404","deviceName":"Wi-Fi Smart Light Switch","status":null,"alias":"Family Room","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"50C7BF181137","role":0,"isSameRegion":true,"hwId":"A0E3CC8F5C1166B27A16D56BE262A6D3","fwId":"00000000000000000000000000000000","oemId":"4AFE44A41F868FD2340E6D1308D8551D","deviceId":"8006F87651F85A2343ADE1E837AE579D17D667E7","deviceHwVer":"1.0"},
             {"brandName":"TP-Link","fwVer":"1.5.2 Build 171208 Rel.114610","deviceName":"Smart Wi-Fi Light Switch","status":null,"alias":"Fifi is a bitch","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"AC84C63BC6CF","role":0,"isSameRegion":true,"hwId":"12657950800085A27A64E9E775C8A7A7","fwId":"00000000000000000000000000000000","oemId":"4748FB6E209D782A854A4B5AEDC89284","deviceId":"80062811F37D22CE80859108E4841FA819F3A23F","deviceHwVer":"2.0"},
             {"brandName":"TP-Link","fwVer":"1.5.2 Build 171208 Rel.114610","deviceName":"Smart Wi-Fi Light Switch","status":null,"alias":"Living Room","deviceType":"IOT.SMARTPLUGSWITCH","appServerUrl":"https://use1-wap.tplinkcloud.com","deviceModel":"HS200(US)","deviceMac":"AC84C65E410E","role":0,"isSameRegion":true,"hwId":"12657950800085A27A64E9E775C8A7A7","fwId":"00000000000000000000000000000000","oemId":"4748FB6E209D782A854A4B5AEDC89284","deviceId":"8006FF9FF28B776DF4DC74D95B1015451A128981","deviceHwVer":"2.0"}
            ]}

 var tokenId = ""

class MyLights extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lightsData: []
        };
      }

      
      componentDidMount(){
              
              var tokenurl = 'http://67.83.21.5:3005/api/auth/lights';
              fetch(tokenurl, {
                method: 'GET',
                headers:{
                  'x-access-token': mytokenapi
                }
              }).then(res => res.json()) 
              .then(response => {
                console.log(response);
                tokenId = response.token;
                myLightsData.deviceList.map((lightId, index) => {
                  var url = 'https://wap.tplinkcloud.com?token='+tokenId;
                  var data = {"method":"passthrough", "params": {"deviceId": lightId.deviceId, "requestData": "{\"system\":{\"get_sysinfo\":null},\"emeter\":{\"get_realtime\":null}}" }}
                    fetch(url, {
                      method: 'POST',
                      body: JSON.stringify(data), // data can be `string` or {object}!
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    })
                    .then(response => response.json())
                    .then(response => {
                      myLightsData.deviceList[index].status = JSON.parse(response.result.responseData).system.get_sysinfo.relay_state;
                      if(myLightsData.deviceList[index].status === 0|null){
                        console.log("nothing to see here");
                        
                    }else if(myLightsData.deviceList[index].status === 1){
                      this.setState({lightsData:myLightsData});
                      
                      }           
                    })
                    .catch(error => console.error('Error:', error))
                  });
                 }
              )
        .catch(error => console.error('Error:', error));
                console.log(tokenId)
      }

      lightStatusHandler = (first, info) => {
        var lightindex = info.props.index;
        var lightStatus = document.getElementsByClassName('switch-input form-check-input')[lightindex].checked === true ? 1:0;
        console.log(first);
        console.log("lightstatus"+lightStatus);
        console.log(lightindex);
        //this.setState({lights:update({type:{deviceList:{[lightindex]:{status: testing}}}})});
        myLightsData.deviceList[lightindex].status = lightStatus;
          var url = 'https://use1-wap.tplinkcloud.com/?token='+tokenId;
          
          var data = {"method":"passthrough", "set_dev_alias":{"alias":""}, "params": {"deviceId": info.props.lightid, "requestData": "{\"system\":{\"set_relay_state\":{\"state\":" + lightStatus + "}}}" }};
    
          fetch(url, {
            method: 'POST',
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(response => console.log("complete"))
          .catch(error => console.error('Error:', error));
      }
    
     
      /*
      shouldComponentUpdate(nextProps, nextState){
        return nextState.lightsData != this.state.lightsData;
      }
*/
    render() {
    
                
      let myFinalLights = myLightsData.deviceList.map((eachLight, index)=> {
        return (
          <Col xs="12" sm="6" lg="3" key={index}>
         <Widget01 color="success" key={eachLight.deviceId}  header={eachLight.alias} lightBrand ={eachLight.brandName} lightid={eachLight.deviceId} index={index} checked={eachLight.status} lightstatusupdate={this.lightStatusHandler}> </Widget01>
         {console.log(eachLight.status)}
         {console.log('this is the state ', this.state)}
         </Col>
       )
       })
       
        return (
          <div className="animated fadeIn">
          <Row>
          {myFinalLights}
          </Row>
          </div>
        );
      }
    }
    
    export default MyLights;