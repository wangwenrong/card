import React from 'react';
import { Row, Col, Input, Select, DatePicker, Button, Table } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export class Cardpurchase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: '40%',
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: '30%',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width: '30%',
            }],
            data: [{
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            }, {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            }, {
                key: '3',
                name: '李大嘴',
                age: 32,
                address: '西湖区湖底公园1号',
            }]
        }
    }
    render() {
        return (
            <div>
                <Row className="testRowClassName" style={{ marginBottom: '20px' }} >
                    <Col span="6">
                        订单编号：<Input style={{ width: 200 }} placeholder="默认尺寸" />
                    </Col>
                    <Col span="6">
                        订单状态：
                    <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                            <Option value="v1">v1</Option>
                            <Option value="v2">v2</Option>
                            <Option value="v3">v3</Option>
                        </Select>
                    </Col>
                    <Col span="6">
                        客户名称：<Input style={{ width: 200 }} placeholder="默认尺寸" />
                    </Col>
                    <Col span="6">
                        运营商：
                    <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                            <Option value="v1">中国移动</Option>
                            <Option value="v2">中国电信</Option>
                            <Option value="v3">中国联通</Option>
                        </Select>
                    </Col>
                </Row>
                <Row className="testRowClassName" style={{ marginBottom: '20px' }} >
                    <Col span="6">
                        流量套餐：<Input style={{ width: 200 }} placeholder="默认尺寸" />
                    </Col>
                    <Col span="6">
                        下单人：<Input style={{ width: 200 }} placeholder="默认尺寸" />
                    </Col>
                    <Col span="6">
                        下单时间：
                        <DatePicker/>
                    </Col>
                    <Col span="6">
                        服务终止时间：
                        <DatePicker/>
                    </Col>
                </Row>
                <Row className="testRowClassName">
                    <Col span="24">
                        套餐状态：
                        <Select defaultValue="请选择" style={{ width: 200 }} onChange={handleChange}>
                            <Option value="v1">v1</Option>
                            <Option value="v2">v2</Option>
                            <Option value="v3">v3</Option>
                        </Select>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{ marginTop: '20px', marginBottom: '20px' }} >
                    <Col span="4" type="flex" justify="center">
                        <Button type="primary" icon="search">搜索</Button>
                    </Col>
                    <Col span="4" type="flex" justify="center">
                        <Button type="ghost" icon="reload">重置</Button>
                    </Col>
                </Row>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }

}


