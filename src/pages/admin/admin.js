import React from 'react';
import { Layout } from 'antd';
import Head from './../../components/header/header'
import FooterContent from './../../components/footer/footer'
import Navigation from './../../components/navigation/navigation'
import './admin.less';
const { Header, Footer, Sider, Content } = Layout;
class Admin extends React.Component {
    render() {
        return (
            <Layout className="page">
                <Sider className="header">
                    <Navigation/>
                </Sider>
                <Layout>
                    <Header>
                        <Head/>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                    <Footer>
                        <FooterContent />
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
export default Admin;