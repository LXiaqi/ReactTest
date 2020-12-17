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
            searchNum: '',
            length:0,
            expresslogo:'',
            expressname:'',
            expresstype:'',
            expressltime:'',
            expressnum:'',
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
        console.log(res.data.result.list);
        let switchtype;
            switch (res.data.result.deliverystatus) {
             case "1":
            switchtype = "在途中";
            break;
             case "2":
            switchtype = "派件中";
            break;
             case "3":
            switchtype = "已签收";
            break;
             case "3":
            switchtype = "包裹异常";  
            break;
            } 
        this.setState({
            length:res.data.result.list.length,
            expresslogo:res.data.result.logo,
            expressname:res.data.result.expName,
            expresstype:switchtype,
            expressltime:res.data.result.updateTime,
            expressnum:res.data.result.number
        })
          this.StepsList(res.data.result.list);
        })
    };
    // 步骤条数据展示
    StepsList = (data) => {
       const stepsResult = data.map((item,index)=> {
            return (
                <Step title={item.time} description={item.status}  key={index} />
            );
        })
        this.setState({
            stepsResult,
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
                {this.state.length === 0 ? '' : <Card className='result_content'>
                    <div className="expressinfo">
                        <div className="expressLeft"><img src={this.state.expresslogo} alt="logo"/></div>
                        <div className="expressRight">
                            <h4>{this.state.expresstype}</h4>
                            <span>{this.state.expressname}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>快递单号：{this.state.expressnum}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>更新时间：{this.state.expressltime}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                    </div>
                    <Divider />
                    <Steps progressDot current={0} direction="vertical">
                       {this.state.stepsResult}
                    </Steps>
                </Card>}
            </div>
        )
    }
}
export default searchExpress;