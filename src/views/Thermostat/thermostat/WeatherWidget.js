import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import NightRain from './img/weathericon_night_rain.svg';
import DaySunny from './img/weathericon_day_sunny.svg';
import PartlyCloudy from './img/weathericon_day_mostlycloudy.svg';
import MainlySunny from './img/weathericon_day_mainlysunny.svg';
import MostlyCloudy from './img/weathericon_night_partlycloudy.svg';



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
};

const defaultProps = {
  header: '90.2%',
  mainText: 'Loading...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  temperture: 'Loading..',
  // color: '',
  value: '25',
  variant: '',
};

class WeatherWidget extends Component {

  
  render() {
    const {finalImg, condition, temperture, className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props;

    // demo purposes only
    const progress = { style: '', color: color, value: value };
    const card = { style: '', bgColor: '' };

    if (variant === 'inverse') {
      progress.style = 'progress-white';
      progress.color = '';
      card.style = 'text-white';
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames('progress-xs my-3', progress.style);

    const weatherStyle = {
      fontSize: '40px',
      verticalAlign: 'middle'
    };

    const conditionStyle = {
      fontSize: '18px'
    };

    const weatherIcon = {
      height: '7em',
    };

    const FinalWeather = () => {
      if(this.props.condition === 'Clear'){
        console.log('this is inside the final weather clear', this.props);
        return  <img style={weatherIcon} alt="1" src={DaySunny}/>
      }else if(this.props.condition === 'rain'){
        console.log('this is inside the final weather rain', this.props);
        return  <img style={weatherIcon} alt="1" src={NightRain}/>
      }else if(this.props.condition === 'Mostly Cloudy'){
        console.log('this is inside the final weather rain', this.props);
        return  <img style={weatherIcon} alt="1" src={MostlyCloudy}/>
      }else if(this.props.condition === 'Mostly Sunny'){
        console.log('this is inside the final weather rain', this.props);
        return  <img style={weatherIcon} alt="1" src={MainlySunny}/>
      }else if(this.props.condition === 'Partly Cloudy'){
        console.log('this is inside the final weather rain', this.props);
        return  <img style={weatherIcon} alt="1" src={PartlyCloudy}/>
      }else{
        console.log('this is inside the final weather other', this.props)
        return   <p></p>


      }
    }


    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div>
          <div className="h3 m-0">{header}</div>
          <div>{mainText}</div>
          <div style={weatherIcon}>
          <FinalWeather finalImg={condition} />
          <span style={weatherStyle}>{Math.round(temperture * .10)+'%'}</span>
          </div>
          <div style={conditionStyle}>{condition}</div>
          <small className="text-muted"></small>
          <div>{children}</div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

WeatherWidget.propTypes = propTypes;
WeatherWidget.defaultProps = defaultProps;

export default WeatherWidget;
