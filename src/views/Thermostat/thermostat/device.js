import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import MainThermo from './MainThermo';
import WeatherWidget from './WeatherWidget';
import BedroomSensors from './BedroomSensors';
import QuickChanges from './QuickChanges';
import mytokenapi  from '../../mytoken';


class ThermoDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tokenInfo: [],
            currentStatus: [],
            thermostatHighLevel: [],
            thermostatDetails: {
              actualHumidity: 'Loading...',
              actualTemperature: 'Loading',
              connectDateTime: "2018-11-16 09:17:11",
              connected: true,
              desiredCool: 750,
              desiredCoolRange: [{
                0: 650,
                1: 920,
              }],
              desiredDehumidity: 60,
              desiredFanMode: "auto",
              desiredHeat: 700,
              desiredHeatRange: [{
                0: 450,
                1: 920
              }],
              desiredHumidity: 36,
              disconnectDateTime: "2018-11-16 07:53:37",
              firstConnected: "2016-10-23 18:15:08",
              lastModified: "2018-11-26 00:12:14",
              lastStatusModified: "2018-11-26 00:12:14",
              runtimeDate: "2018-11-26",
              runtimeInterval: 1,
              runtimeRev: "181126001214",
            },
            thermostatLocation: [],
            thermostatWeather: [],
            emeryThermostat: {
              capability: [
                {id: "1",type: "temperature",value: "Loading..."}
              ],
              code : '',
              id : '',
              inUse : '',
              name : '',
              type : '',
            },
            mastersThermostat: {
              capability: [
                {id: "1",type: "temperature",value: "Loading..."}
              ],
              code : '',
              id : '',
              inUse : '',
              name : '',
              type : '',
            },
        };
      }


      componentDidMount(){
        var refreshToken = localStorage.getItem('refresh_token');  
        var url = 'https://67.83.21.5:80/api/auth/thermostat';
        fetch(url, {
              method: 'GET',
              headers: {
                'x-access-token': mytokenapi
              }
         })
         .then(response => response.json())
        .then(response => {
            console.log(response);
            let myToken = response.access_token;
            var turl = 'https://67.83.21.5:8080/https://api.ecobee.com/1/thermostat?format=json&body=%7B%22selection%22%3A%7B%22selectionType%22%3A%22registered%22%2C%22selectionMatch%22%3A%22%22%2C%22includeRuntime%22%3Atrue%2C%22includeWeather%22%3Atrue%2C%20%22includeLocation%22%3Atrue%2C%20%22includeSensors%22%3Atrue%7D%7D%0A';
        fetch(turl, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + myToken,
              }
         })
         .then(response => response.json())
        .then(response => {
            console.log(response);

            this.setState({
                currentStatus: response.thermostatList[0].identifier, 
                token_info: refreshToken,
                thermostatHighLevel : response.thermostatList[0],
                thermostatDetails : response.thermostatList[0].runtime,
                thermostatLocation : response.thermostatList[0].location,
                thermostatWeather : response.thermostatList[0].weather.forecasts[0],
                emeryThermostat : response.thermostatList[0].remoteSensors[0],
                mastersThermostat : response.thermostatList[0].remoteSensors[1],

            });

        }).catch(error => console.error('Error:', error))

        })
        .catch(error => console.error('Error:', error))
      }

      thermostatHold = (info) => {
        console.log(info)
        //var refreshToken = localStorage.getItem('refresh_token');
        var htoken = localStorage.getItem('my_token');
        var hurl = 'https://67.83.21.5:8080//https://api.ecobee.com/1/thermostat?format=json&body=%7B%22selection%22%3A%7B%22selectionType%22%3A%22registered%22%2C%22selectionMatch%22%3A%22%22%7D%2C%22functions%22%3A%20%5B%7B%22type%22%3A%22setHold%22%2C%22params%22%3A%7B%22holdType%22%3A%22indefinite%22%2C%22holdClimateRef%22%3A%22'+info+'%22%7D%7D%5D%7D%20%0A';
        var data = "";
        fetch(hurl, {
                method: 'POST',
                body: data,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': 'Bearer ' + htoken,
                }
          })
          .then(response => response.json())
          .then(response => {
              console.log(response);
          }).catch(error => console.error('Error:', error))


      }

    render() {
      let temp = Math.round(this.state.thermostatDetails.actualTemperature * .10)+'%';
      //const pictureTime = 'gotime';


     return (
        <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="6">
            <MainThermo color="success" header='Home' temp={temp} humidity={this.state.thermostatDetails.actualHumidity+'%'} thermoHigh={Math.ceil(this.state.thermostatDetails.desiredCool*.10)} thermoLow={Math.ceil(this.state.thermostatDetails.desiredHeat*.10)}/>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <WeatherWidget color="info" header="Weather" mainText={this.state.thermostatLocation.city} temperture={this.state.thermostatWeather.temperature} condition={this.state.thermostatWeather.condition}/>
            {console.log(this.state)}
            <QuickChanges color="info" header="Quick Changes" thermostatHold={this.thermostatHold}/>

          </Col>
          <Col xs="12" sm="6" lg="3">
          <BedroomSensors color="info" header="Bedroom" mainText={this.state.emeryThermostat.name} temperture={this.state.emeryThermostat.capability[0].value}/>
          <BedroomSensors color="info" header="Bedroom" mainText={this.state.mastersThermostat.name} temperture={this.state.mastersThermostat.capability[0].value}/>
          </Col>
        </Row>
        </div>
        );
      }
    }
    
    export default ThermoDevice;