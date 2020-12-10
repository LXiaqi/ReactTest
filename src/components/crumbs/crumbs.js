import React from 'react';
import { Card,Breadcrumb  } from 'antd';
import './crumbs.less';
import NewDate from './../../utils/date'
import {location,weather} from './../../api/location'
class Crumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          city:'',
          citycode:'',
          sky:''
        }
    };
    componentDidMount() {
        this.request();
        this.interval = setInterval(() => {
           let sysTime = NewDate.formateDate(new Date().getTime());
           this.setState({
                sysTime
            })
        },1000);
    };
    componentWillUnmount() {
        clearInterval(this.interval);
    };
    request = () => {
        location().then(res =>{
            this.setState({
                city:res.data.city,
                citycode:res.data.adcode
            })
            weather(this).then(res=> {
                this.setState({
                    sky:res.data.lives[0].weather
                  
                })
            })
        })
    }; 
    render() {
        return (
            <Card className="card">
                <Breadcrumb className="crumb">
                    <Breadcrumb.Item>首页 /</Breadcrumb.Item>
                </Breadcrumb>
                <div className="crumb_right">
                    <span>{this.state.sysTime} &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span> {this.state.city}  &nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span> {this.state.sky} </span>
                </div>
            </Card>
        )
    }
}
export default Crumbs;