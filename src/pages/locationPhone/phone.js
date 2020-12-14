import React from 'react';
import './phone.less'
import { Card, Input, Button, Result } from 'antd';
import Crumbs from './../../components/crumbs/crumbs';
import { phonelocation } from './../../api/locationphone'
class LocationPhone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchphone: '',
            phoneResult: ''
        }
    };
    IptPhone = (e) => {
        this.setState({
            searchphone: e.target.value
        })
    };
    SearchLocation() {
        console.log(this.state.searchphone);
        phonelocation(this).then(res => {
            this.setState({
                phoneResult: res.data.replace(/<[^<>]+>/g, '')
            })
        })
    };
    cleanResult() {
        this.setState({
            phoneResult: '',
            searchphone:'',
        })
    }
    render() {
        return (
            <div className="location_phone" >
                <Crumbs />
                <Card className="location_search">
                    <Input onChange={this.IptPhone} value={this.state.searchphone}  className="ipt_phone" placeholder="请输入手机号" />
                    <Button className="btn_search" type="primary" onClick={() => this.SearchLocation()}>搜索</Button>
                </Card>
                <Card className = 'result_content'>
                    {
                        this.state.phoneResult === '' ? null :<Result
                        status="success"
                        title="查询结果"
                        subTitle={this.state.phoneResult}
                        extra={[
                            <Button type="primary"  key="console" onClick={() => this.cleanResult()} >
                                清除搜索结果
                            </Button>
                           
                        ]}
                        />
                    }
                    
                </Card>
            </div>
        )
    }
}
export default LocationPhone
