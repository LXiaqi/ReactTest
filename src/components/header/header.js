import React from 'react';
import { Row, Col } from 'antd';
import './header.less'
class Head extends React.Component {
    render() {
        return (
            <div className="header">
                <Row className="headerRow">
                    <Col span="24" className="headerCol">
                        <span className="signOut">退出</span>
                        <span className="user">欢迎，<b className="name">董卓小蛮腰</b></span>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default Head;