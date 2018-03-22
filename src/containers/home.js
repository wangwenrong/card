import React from 'react';
import { Navlink } from './navlink';
import { Breadcrumb, Icon, Layout, Menu, AutoComplete } from 'antd';
import { Setmeal } from './setmeal';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content, Footer } = Layout;

export class Home extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" style={{height:'80px'}} >logo</div>
                    <Menu
                    mode="inline"
                    theme='dark'
                    // openKeys={this.state.openKeys}
                    // onOpenChange={this.onOpenChange}
                    defaultSelectedKeys={['setmeal']}
                    defaultOpenKeys={['sub1']}
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>卡片采购</span></span>}>  
                        <Menu.Item key="setmeal">
                            <Link to='/'>流量套餐管理</Link>
                        </Menu.Item>
                        <Menu.Item key="cardpurchase">
                            <Link to='/cardpurchase'>卡片采购</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>卡片管理</span></span>}>
                        <Menu.Item key="5">
                            <Link to='/orderdetails'>订单明细</Link>
                        </Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>卡片续费</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#001529', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }} >
                            <Breadcrumb.Item>首页</Breadcrumb.Item>
                            <Breadcrumb.Item><a href="">卡片采购</a></Breadcrumb.Item>
                            <Breadcrumb.Item>发货管理</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
            // <Layout style={{ height: '100%' }} >
            //     <Header style={{ height: '100px', background: 'rgb(64, 64, 64)' }} >
            //         <h1 style={{ color: '#fff' }} >融通智联</h1>
            //     </Header>
            //     <Sider>
            //         <Navlink />
            //     </Sider>
            //     <Content style={{ marginLeft: '240px', height: '100%' }} >
            //         <Breadcrumb style={{ marginBottom: '-30px', paddingTop: '30px', marginLeft: '20px' }} >
            //             <Breadcrumb.Item>首页</Breadcrumb.Item>
            //             <Breadcrumb.Item><a href="">卡片采购</a></Breadcrumb.Item>
            //             <Breadcrumb.Item>发货管理</Breadcrumb.Item>
            //         </Breadcrumb>
            //         <div style={{ marginTop: '60px', marginLeft: '20px', marginRight: '20px' }} >
            //             <div style={{ marginBottom: '20px' }} >
            //                 <Icon type="appstore" />
            //                 <span style={{ marginLeft: '10px' }} >流量套餐管理</span>
            //             </div>
            //             {this.props.children}
            //         </div>
            //     </Content>
            // </Layout>
        )
    }
}


