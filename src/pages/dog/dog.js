import React from 'react';
import './dog.less'
import { dog } from './../../api/dog'
import Crumbs from './../../components/crumbs/crumbs';
import { Card, Input, Button, Table, Tag, Space } from 'antd';
class DogMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogName: '',
            dogList:[],
        }
    };
    // 输入框的change 事件， 获取val
    IptNum = (e) => {
        this.setState({
            dogName: e.target.value
        })
    };
    // 检索按钮
    SearchExpress() {
        this.doginfo();
    };
    componentDidMount() {
           this.doginfo();
    };
    doginfo() {
        dog(this).then(res => {
            console.log(res);
            this.setState({
                dogList:res.data.result.petFamilyList
            })
        });
    }
    render() {
        const columns = [
            {
                align: 'center',
                title: '宠物ID',
                dataIndex: 'petID',
            },
            {
                align: 'center',
                title: '宠物名称',
                dataIndex: 'name',

            },
            {
                align: 'center',
                title: '宠物名称（英）',
                dataIndex: 'engName',

            },
            {
                align: 'center',
                title: '宠物价格',
                dataIndex: 'price',

            },
            {
                align: 'center',
                title: '宠物照片',
                dataIndex: ' coverURL',
                render: (src) => <img src={src} alt="" className="avatar_mini" />
            },

        ];
   
        return (
            <div className="dog">
                <Crumbs></Crumbs>
                <Card className="dogSearch">
                    <Input onChange={this.IptNum} value={this.state.dogName} className="ipt_dog" placeholder="请输入关键字" />
                    <Button className="btn_search" type="primary" onClick={() => this.SearchExpress()}>搜索</Button>
                </Card>
                <Card> <Table columns={columns} dataSource={this.state.dogList} rowKey={row => row.petID} /></Card>
            </div>
        )
    }
}
export default DogMore;