import React from 'react';
import { Card,Breadcrumb  } from 'antd';
import './crumbs.less'
class Crumbs extends React.Component {
    render() {
        return (
            <Card className="card">
                <Breadcrumb className="crumb">
                    <Breadcrumb.Item>首页 /</Breadcrumb.Item>
                </Breadcrumb>
                <div className="crumb_right">
                    <span>2020-12-09  </span>
                    <span>  雨夹雪</span>
                </div>
            </Card>
        )
    }
}
export default Crumbs;