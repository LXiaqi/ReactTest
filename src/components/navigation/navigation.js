import React from 'react';
import logo from './../../logo.svg'
import { Menu } from 'antd';
import  MenuConfig from './../../config/menuConfig';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'  //连接器
import {switchMenu} from './../../redux/action' //事件行为
import './navigation.less'
const { SubMenu } = Menu;
class navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentKey:''
        }
    };
    //侧边栏的点击事件
    handleClick=({item}) => {
         // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));
        this.setState({
            currentKey:item.props.eventKey
        })
    }
    componentDidMount() {
        
        const menuThreeNode = this.renderMenu(MenuConfig);  
        const currentKeys = window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            menuThreeNode,
            currentKey:currentKeys
        })
    };
 
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
               return (
                <SubMenu key={item.key}  title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
               )
            }
            // 重复点击同一个路由组件， 数据不刷新， 会有警告 replace这个很好的解决了这个问题
            return  <Menu.Item className="menuitem" key={item.key} title={item.title} ><NavLink to={item.key} replace>{item.title}</NavLink></Menu.Item>
        })
    };

    render() {
        return (
            <div className="menus">
                <div className="logo">
                    <img className="App_logo" src={logo} alt="" alt="logo" />
                    <p>ReactTest</p>
                </div>
                <div style={{ width: 200 }}>
                    <Menu
                        onClick={this.handleClick}
                        className="menubox"
                        selectedKeys={this.state.currentKey}
                        mode="inline"
                        theme="dark"
                    >
                        {this.state.menuThreeNode}
                    </Menu>
                </div>
            </div>
        )
    }
}
export default connect() (navigation) 