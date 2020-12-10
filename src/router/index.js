import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './../App';
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
import Buttons from './../pages/ui/buttons/button'
import Home from './../pages/home/home'
import Maps from './../pages/ui/map/map'
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
                                <Route path='/admin/Ui/buttons'  component={Buttons}></Route>
                                <Route path='/admin/Ui/maps'  component={Maps}></Route>
                            </Admin>
                        } ></Route>
                    </Switch>
                 </App>
             </Router>
         )
     }
 }
 export default IRouter;