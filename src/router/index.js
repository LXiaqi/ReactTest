import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './../App';
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'

import Home from './../pages/home/home'
import Maps from './../pages/ui/map/map'
import LocationPhone from './../pages/locationPhone/phone'
 class IRouter extends React.Component {
     render() {
         return (
             <Router>
                 <App>
                    <Switch>
                        <Route exact  path='/' component={Login}></Route>
                        <Route path='/admin' render={()=> 
                            <Admin>
                                <Route path='/admin/home'  component={Home}></Route>
                                <Route path='/admin/Ui/maps'  component={Maps}></Route>
                                <Route path='/admin/phone'  component={LocationPhone}></Route>
                            </Admin>
                        } ></Route>
                    </Switch>
                 </App>
             </Router>
         )
     }
 }
 export default IRouter;