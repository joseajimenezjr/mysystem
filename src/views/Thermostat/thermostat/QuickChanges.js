import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody, Col } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';


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
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: '',
};

class QuickChanges extends Component {

  
  render() {
    const { className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props;

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
    const home = 'home';
    const away = 'away';

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          <div className="h4 m-0">{header}</div>
          <br></br>
          <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          <Button block size='md' outline={true} color="primary" onClick={(event)=>this.props.thermostatHold(home)}>Home and hold</Button>
          <Button block size='md' outline={true} color="primary"onClick={(event)=>this.props.thermostatHold(away)}>Away and hold</Button>
          </Col>         
          <small className="text-muted"></small>
          <div>{children}</div>
        </CardBody>
      </Card>
    );
  }
}

QuickChanges.propTypes = propTypes;
QuickChanges.defaultProps = defaultProps;

export default QuickChanges;
