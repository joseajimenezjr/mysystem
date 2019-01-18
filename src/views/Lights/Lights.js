import React, { Component } from 'react';
import MyLights from './lights/lightsdata';


//const starter = this.state.lights

class Lights extends Component {
  constructor(props){
    super(props);

    this.state = {
      lights: [],
      isLoading: false,
    };
  }

 
  render() {
    /*var hue  = window.jsHue();
    hue.discover().then(bridges => {
      if(bridges.length === 0) {
          console.log('No bridges found. :(');
      }
      else {
          bridges.forEach(b => console.log('Bridge found at IP address %s.', b.internalipaddress));
      }
  }).catch(e => console.log('Error finding bridges', e));
*/
    return (
      <div>
      
      <MyLights />
      </div>
    )
  }
}

export default Lights;
