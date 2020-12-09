import React from 'react';
import logo from './../../logo.svg'
import { Menu } from 'antd';
import  MenuConfig from './../../config/menuConfig';
import {NavLink} from 'react-router-dom';
import './navigation.less'
const { SubMenu } = Menu;
class navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    };
    componentDidMount() {
        const menuThreeNode = this.renderMenu(MenuConfig);  
        this.setState({
            menuThreeNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if(item.children) {
               return (
                <SubMenu key={item.key}  title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>
               )
            }
            return  <Menu.Item className="menuitem" key={item.key} ><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>
        })
    }
    render() {
        return (
            <div className="menu">
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>ReactTest</p>
                </div>
                <div style={{ width: 200 }}>
                    <Menu
                        className="menubox"
                        defaultSelectedKeys={['/admin/home']}
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
export default navigation