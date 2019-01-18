import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardBody } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';
import Loader from 'react-loader-spinner'


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

class Widget01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newImgFetch: '0',
    }
  }
  
  render() {
    const { state, isLoading, deviceID, index, thumbnail, cameraText, token, img, className, cssModule, header, mainText, smallText, color, value, children, variant, ...attributes } = this.props;

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
    

    const cameraTextCss = {
      position: 'absolute',
      color: 'white',
      left: '30px',
      top: '30px',
      background:'#20a8d8'
    }

    const constcameraLogo = {
      position: 'absolute',
      color: 'white',
      bottom: '30px',
      right: '40px'
    }


    let getCameraImg = (token, img, index) => {
      var cameraPhotoUrl = img;
        fetch(cameraPhotoUrl, {
          method: 'GET',
          headers:{
             'Content-Type': 'image/jpeg',
             'locale': 'en_US',
             'app-build': 'IOS_3472',
             'token-auth': token,
            }
          }).then(response => response.blob())
         .then( images => { 
          var imgUrl = '<img src="'+img+'" height="150">'
          return(
            document.getElementsByClassName('beforeImage')[index].innerHTML = imgUrl
          )
        })
        .catch(error => console.error('Error:', error)) 
    }

    let newImgRequest = (token, deviceID, index) => {
      //this.setState({newImgFetch:true})
      var updatedImg= 'https://cors-anywhere.herokuapp.com/https://rest-u002.immedia-semi.com/network/13623/camera/'+deviceID+'/thumbnail';
      fetch(updatedImg, {
      method: 'POST',
      headers:{
         'Content-Type': 'application/json',
         'locale': 'en_US',
         'app-build': 'IOS_3472',
         'token-auth': token,
        }
      }).then(response => response.json())
     .then( response => {
       console.log(response);
       setTimeout(function(){ 
        getNewImgRequest(token,deviceID, index)
        }, 6000);
       
     })
     .catch(error => console.error('Error:', error)) 
    }

    let getNewImgRequest = (token, deviceID, index) => {
      var updatedImg= 'https://cors-anywhere.herokuapp.com/https://rest-u002.immedia-semi.com/network/13623/camera/'+deviceID;
      fetch(updatedImg, {
      method: 'GET',
      headers:{
         'Content-Type': 'application/json',
         'locale': 'en_US',
         'app-build': 'IOS_3472',
         'token-auth': token,
        }
      }).then(response => response.json())
     .then( response => {
       console.log(response.camera_status.thumbnail);
       var finalURL= "https://cors-anywhere.herokuapp.com/https://rest-u002.immedia-semi.com/"+response.camera_status.thumbnail+".jpg"
              fetch(finalURL, {
                method: 'GET',
                headers:{
                  'Content-Type': 'image/jpeg',
                  'locale': 'en_US',
                  'app-build': 'IOS_3472',
                  'token-auth': token,
                  }
                }).then(response => response.blob())
              .then( images => { 
                var imgUrl = '<img src="'+window.URL.createObjectURL(images)+'" height="150">'
                //this.setState({newImgFetch:false})
                return(
                  document.getElementsByClassName('beforeImage')[index].innerHTML = imgUrl
                )
              })
              .catch(error => console.error('Error:', error)) 
              
     })
     .catch(error => console.error('Error:', error)) 
    }

    let whichContent = () => {
      if(isLoading === false){
        return(
        <div>
          <div style={cameraTextCss} className="h4 m-0">{header}</div>
          <Button style={constcameraLogo} color="primary" outline onClick={() => newImgRequest(token, deviceID, index)}>
                  <i className="fa fa-camera fa-lg" color="primary"></i>
          </Button>
          <div className="beforeImage" >{cameraText}</div>
          {getCameraImg(token,img,index)}
          <small className="text-muted"></small>
          <div>{children}</div>
        </div>
          )
          }else{
          return(
            <Loader type="Triangle" color="#00BFFF" height="100" width="100"/>  
              )
           } 
         }

    return (
      <Card className={classes} {...attributes}>
        <CardBody>
          {whichContent()}
        </CardBody>
      </Card>
    );
  }
}

Widget01.propTypes = propTypes;
//Widget01.defaultProps = defaultProps;

export default Widget01;
