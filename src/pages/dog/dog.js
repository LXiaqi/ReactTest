import React from 'react';
import './dog.less'
import { dog } from './../../api/dog'
import Crumbs from './../../components/crumbs/crumbs';
import { Card, Input, Button, Table, Image, message} from 'antd';
import untils from './../../utils/date'
class DogMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dogName: '',
            dogList:[],
            loading:false,
            pagination:{},
            dogPage:1
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
    // 重置按钮
    Reset() {
        this.setState({
            dogName:''
        });
        this.doginfo();
    }
    componentDidMount() {
           this.doginfo();
    };
    doginfo() {
        this.setState({
            loading: true
        })
        dog(this).then(res => {
            if(res.data.statusCode === '100002') {
                this.setState({
                    loading: false,
                })
                message.error(res.data.desc);
            }else {
                this.setState({
                    dogList:res.data.result.petFamilyList,
                    loading: false,
                    pagination: untils.pageination(res.data.result.totalCount, (current) => {
                        console.log(current);
                        this.setState({
                            dogPage:current
                        })
                        this.doginfo();
                    })
                })
            }
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
                dataIndex: 'coverURL',
                render: (src) => <Image src={src} alt="" className="avatar_mini" />
            },

        ];
   
        return (
            <div className="dog">
                <Crumbs></Crumbs>
                <Card className="dogSearch">
                    <Input onChange={this.IptNum} value={this.state.dogName} className="ipt_dog" placeholder="请输入关键字" />
                    <Button className="btn_search" type="primary" onClick={() => this.SearchExpress()}>搜索</Button>
                    <Button className="btn_search"  onClick={() => this.Reset()}>重置</Button>
                </Card>
                <Card> <Table columns={columns}  loading={this.state.loading} dataSource={this.state.dogList} rowKey={row => row.petID} pagination={this.state.pagination} /></Card>
            </div>
        )
    }
}
export default DogMore;