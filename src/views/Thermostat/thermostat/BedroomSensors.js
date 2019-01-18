import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Sensorimg from './img/sensors.svg'


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

class BedroomSensors extends Component {

  
  render() {
    const { temperture, className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props;

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
      verticalAlign: 'middle',
      paddingLeft: '30px',
    };

    const sensorStyle = {
      height: '5em'
    };

    /*
    const weatherIcon = {
      backgroundrepeat: 'no-repeat',
      backgroundposition: '0% 50%',
      display: 'in-block',
      height: '50px',
      backgroundsize: '0px',
    };
*/


    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div>
          <div className="h4 m-0">{header}</div>
          <div>{mainText.charAt(0).toUpperCase() + mainText.slice(1)}</div>
          <br />
          <img style={sensorStyle} alt="1" src={Sensorimg}/>
          <span style={weatherStyle}>{Math.round(temperture * .10)+'%'}</span>
          <small className="text-muted"></small>
          <div>{children}</div>
          </div>
        </CardBody>
      </Card>
    );
  }
}

BedroomSensors.propTypes = propTypes;
BedroomSensors.defaultProps = defaultProps;

export default BedroomSensors;
