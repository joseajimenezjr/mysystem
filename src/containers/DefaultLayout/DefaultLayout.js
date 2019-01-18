import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: document.cookie.includes('token') ? true : false
    };
  }

  render() {

    console.log(this.props);
    let checkLogInStatus = () => {
        if(this.state.loggedIn === true){
          return(
            <Switch>
            {console.log('logged in')}
            {console.log(this)}
            {     
              routes.map((route, idx) => {
               return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
            <route.component {...props} />
          )} />)
          : (null);
      },
    )}
            </Switch>
          );
        }else if(this.state.loggedIn === false){
          return(
            <Switch>
            {console.log('not logged in')}
            {console.log(this.props.location)}
            <Redirect from="/" to={{
              pathname: "/login", 
              state:{
                lastpage:this.props.location.pathname
            }
          }}/>
          </Switch>
          )
        }
    }

    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes}/>
            <Container fluid>
            {console.log('inside default layout')}
            {checkLogInStatus()}
            </Container>
          </main>
          <AppAside fixed>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
