import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import { AppSwitch } from '@coreui/react'

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

class Lock extends Component {

  
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


    return (
      <Card className={classes} {...attributes}>
        <CardBody>
        <AppSwitch className={'float-right mb-0'} label color={'info'} size={'lg'} />
          <div className="h4 m-0">{header}</div>
          <div>{mainText}</div>
          {/*<Progress className={progress.style} color={progress.color} value={progress.value} />*/}
          <small className="text-muted">{smallText}</small>
          <div>{children}</div>
        </CardBody>
      </Card>
    );
  }
}

Lock.propTypes = propTypes;
Lock.defaultProps = defaultProps;

export default Lock;
