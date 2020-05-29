import React,{Component} from 'react';

import Component1 from './functional/component1';
import Component2 from './functional/component2';
import Component3 from './functional/component3';
import DynamicComponent from './functional/dynamicComponent';

import {Router,Route, Switch} from 'react-router';

import Container1 from './containers/container1';
import Header from './containers/header';
import history from './utils/history';

class Routes extends Component{
    render(){
        return(
            <div>
                <Router history={history}>
                    <div>
                    <Header />
                    <Switch>
                    <Route exact path="/" component={Container1} />
                    <Route path="/component1" component={Component1} />
                    <Route path="/component2" render={(props)=><Component2 {...props}/>} />
                    <Route path="/component3" component={Component3} />
                    <Route path="/component/:id" render={(props)=><DynamicComponent {...props}/>} />
                    </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes;