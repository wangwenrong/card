import React from 'react';
import { Row, Col, Input, Select, DatePicker, Button, Table, AutoComplete, Modal, BackTop } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const Option = Select.Option;

function onSelect(value) {
    console.log('onSelect', value);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
const columns = [{
    title: 'Name',
    dataIndex: 'name',
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
export class Orderdetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            selectedRowKeys: [],
            visible: false
        }
    }
    render() {
        const { dataSource } = this.state;
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()],
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return (
            <div>
                <Row className="testRowClassName" style={{ marginBottom: '20px' }} >
                    <Col span="6">
                        订单编号：<AutoComplete
                            dataSource={dataSource}
                            style={{ width: 200 }}
                            onSelect={onSelect}
                            onSearch={this.handleSearch}
                            placeholder="请填写"
                        />
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
                        客户名称：<Input style={{ width: 200 }} placeholder="请填写" />
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
                            <DatePicker />
                    </Col>
                    <Col span="6">
                        服务终止时间：
                            <DatePicker />
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
                        <Button type="ghost" icon="reload" onClick={this.showModal}>重置</Button>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>确认要重置吗？</p>
                        </Modal>
                    </Col>
                </Row>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                <BackTop/>
            </div >
        )
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
}


