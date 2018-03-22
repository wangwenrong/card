import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;

export class Navlink extends React.Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
          this.setState({ openKeys });
        } else {
          this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
          });
        }
      }
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <aside>
                <Menu
                    style={{
                        width: '200px'
                    }}
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
            </aside>
        )
    }
}


