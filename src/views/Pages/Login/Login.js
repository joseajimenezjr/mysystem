import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueUserName: '',
      inputValuePassword: '',
      redirect: false,
      loggedIn: false
    };
  }

  updateInputValueUserName(evt){
    this.setState({
      inputValueUserName: evt.target.value
    });
  }

  updateInputValuePassword(evt){
    this.setState({
      inputValuePassword: evt.target.value
    });
  }


 
  render() {
 
    const handleKeyPress = event => {
      if (event.key == 'Enter') {
        checkUser();
      }
    };

  const checkUser = () => {
    var tokenurl = 'http://67.83.21.5:3005/api/auth/authenticated';
            fetch(tokenurl, {
              method: 'GET',
              headers:{
                'email': this.state.inputValueUserName,
                'pwd': this.state.inputValuePassword,
              },
              credentials: 'include'
            }).then(res => res.json()) 
            .then(response => {
              if(response.status === 200){
                console.log('logged in')
                console.log(this.props)
                  document.cookie = "token="+response.token+" expires="+new Date(Date.now() + 600000*100000)+" path=/";
                  this.setState({redirect: true});
              }
            })
            .catch(error => console.error('Error:', error))

  }

  if (this.state.redirect || document.cookie.includes('token')) {
    var lastPage = typeof this.props.location.state;
    console.log(this.props)
    console.log(lastPage.length)
    if(typeof this.props.location.state !='undefined'){
      return <Redirect to={this.props.location.state.lastpage} />;
    }else{
      return <Redirect to='/dashboard' />;
    }
    
  }
    
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username"  value={this.state.inputValueUserName} onChange={evt => this.updateInputValueUserName(evt)}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={this.state.inputValuePasword} onKeyPress={handleKeyPress} onChange={evt => this.updateInputValuePassword(evt)}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4" onClick={checkUser}>Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Casa De Jimenez</h2>
                      <p>This application was created for the sole intent of isolating all of my smart home apps into one user interface. All visitors are being tracked by IP address. If you attempt to access this application without proper access you will be traced and propert authorities will be contacted.</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

//                          <Button color="link" className="px-0">Forgot password?</Button>
//                      <Button color="primary" className="mt-3" active>Register Now!</Button>
