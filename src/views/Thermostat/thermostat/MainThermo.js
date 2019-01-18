import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
//import { AppSwitch } from '@coreui/react';
import Heatimg from './img/systemmode_heat.svg';
import Coolimg from './img/systemmode_cool.svg';
import HumidityImg from './img/humidity.svg';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//import apiKey from './mytokeninfo';


const style = { position: 'absolute', paddingTop: '60px', float: 'left', width: 160, height: 400, marginBottom: 160, marginLeft: 50 };
//const parentStyle = { overflow: 'hidden' };


                                                                                                                                                                                                                                
const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  smallText: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  variant: PropTypes.string,
  temp: PropTypes.string,
  humidity: PropTypes.string,
};

const defaultProps = {
  header: '90.2%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: '',
  temp:'Loading...'
};

const containerText = {
  textAlign: 'center'
};

const tempText = {
  fontSize: '60px',
  paddingBottom: '150px'
};

/*
const sliderStyles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
};
*/
const heatAndCoolIcons = {
  height: '26px',
  marginTop: '50px',
  /*
  position: 'absolute',
  top: '0',
  left: '5px ',
  */
};

const humidityText = {
  fontSize: '18px',
  marginTop: '60px',
}


const spanWrapper = {
  position: 'relative', 
}

const humidityStyle = {
  height: '20px',
}
class MainThermo extends Component {

  thermostatHold = (info) => {
    console.log(info)
    //var refreshToken = localStorage.getItem('refresh_token');
    var htoken = localStorage.getItem('my_token');
    var hurl = 'http://67.83.21.5:8080/https://api.ecobee.com/1/thermostat?format=json&body=%7B%22selection%22%3A%20%7B%20%22selectionType%22%3A%22registered%22%2C%20%22selectionMatch%22%3A%22%22%7D%2C%22functions%22%3A%20%5B%7B%22type%22%3A%22setHold%22%2C%20%22params%22%3A%7B%20%22holdType%22%3A%22nextTransition%22%2C%22heatHoldTemp%22%3A'+true+'%2C%22coolHoldTemp%22%3A'+true+'%7D%7D%5D%7D%20%20';
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
    const { thermoHigh, thermoLow, thermoclasses, humidity, temp, className, cssModule, header, mainText, smallText, color, children, variant, ...attributes } = this.props;

    // demo purposes only
    const card = { style: '', bgColor: '' };

    const marks = {
      61: '61°F',
      62: '62°F',
      63: '63°C',
      64: '64°C',
      65: <strong>65°C</strong>,
      66: '66°F',
      67: '67°F',
      68: '68°F',
      69: '69°F',
      70: '70°F',
      71: '71°F',
      72: '72°F',
      73: '73°C',
      74: '74°C',
      75: '75°F',
      76: '76°F',
      77: '77°F',
      78: {
        style: {
          color: 'red',
        },
        label: <strong>78°F</strong>,
      },
    };
    
    function log(value) {
      console.log(value); //eslint-disable-line
      return <button>testing</button>
    }

    if (variant === 'inverse') {
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);

    return (
      <div style={containerText}>
      <Card className={classes} {...attributes}>
      <div style={style}>
          <Slider.Range vertical min={61} marks={marks} step={1} max={78}
        onChange={log} value={[thermoLow, thermoHigh]}/>           
        </div>
        <CardBody>
          <div className="h4 m-0">{header}</div>
          <span style={spanWrapper}>
          {console.log('thermo low and high are ', thermoLow, thermoHigh)}
          <img style={heatAndCoolIcons} alt="1" src={Coolimg}/>
          <img style={heatAndCoolIcons} alt="2" src={Heatimg}/>
          </span>
          
          <span>
          <img style={humidityStyle} alt="3" src={HumidityImg}/>
          <div style={humidityText}>{humidity}</div>
          </span>
          <span>
          <div style={tempText}>{temp}</div>
        </span>
              <small className="text-muted"></small>
          <div>{children}</div>
        </CardBody>
        
      </Card>
      </div>
    );
  }
}

MainThermo.propTypes = propTypes;
MainThermo.defaultProps = defaultProps;
MainThermo.defaultProps = defaultProps;

export default MainThermo;
