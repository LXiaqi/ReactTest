import React from 'react'
import { Card, Input, Button, Steps, Divider } from 'antd';
import Crumbs from './../../components/crumbs/crumbs';
import { express } from './../../api/express'
import './searchExpress.less'
const { Step } = Steps;
class searchExpress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchNum: ''
        }
    };
    // 输入框的change 事件， 获取val
    IptNum = (e) => {
        this.setState({
            searchNum: e.target.value
        })
    };
    // 搜索按钮，发送请求改变数据
    SearchExpress() {
        express(this).then(res => {
            console.log(res);
        })
    };
    render() {
        return (
            <div className="location_express">
                <Crumbs />
                <Card className="express_search">
                    <Input onChange={this.IptNum} value={this.state.searchNum} className="ipt_express" placeholder="请输入快递单号" />
                    <Button className="btn_search" type="primary" onClick={() => this.SearchExpress()}>搜索</Button>
                </Card>
                <Card className='result_content'>
                    
                    <Divider />
                    <Steps progressDot current={1} direction="vertical">
                        <Step title="Finished" description="This is a description. This is a description." />
                        <Step title="Finished" description="This is a description. This is a description." />
                        <Step title="In Progress" description="This is a description. This is a description." />
                        <Step title="Waiting" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                    </Steps>

                </Card>
            </div>
        )
    }
}
export default searchExpress;