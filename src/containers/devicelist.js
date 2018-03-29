import React from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button, FlatList } from 'react-native';
// import { StackNavigator } from 'react-navigation';


const BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';
let instance = axios.create({
    timeout: 30000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
});
export class DevicelistScreen extends React.Component {
    static navigationOptions = {
    };
    page = null;
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            refreshing: true,
            loadMore: false
        }
    }
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={{ height: '100%', position: 'relative', backgroundColor: '#fff' }} >
                <StatusBar backgroundColor={'#3285ff'} translucent={true} barStyle='light-content' />
                <View style={{ backgroundColor: '#3285ff', height: 44, flexDirection: 'row', justifyContent: 'center', position: 'relative' }} >
                    <TouchableOpacity
                        onPress={() => {
                            (goBack())
                        }}
                        style={{ width: 44, height: 44, position: 'absolute', top: 0, left: 0 }}>
                        <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity>
                    <Text style={{ width: '70%', fontSize: 18, color: '#fff', lineHeight: 44, textAlign: 'center', fontWeight: 'bold' }} >设备列表页</Text>
                </View>
                <View>
                    {/* <TouchableOpacity 
                        onPress={()=>{
                            const {navigate} = this.props.navigation;
                            navigate('Devicedetail')
                        }}
                        style={{ flexDirection: 'row', marginLeft: 20, paddingRight: 20, marginTop: 20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1, alignItems: 'center' }} >
                        <View style={{ flex: 1 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                                <Text style={{ color: '#000', fontSize: 14 }} >设备号：</Text>
                                <Text>LJKJNK9876574576</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                                <Text style={{ color: '#000', fontSize: 14 }} >车架号：</Text>
                                <Text>LJKJNK9876574576</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                                <Text style={{ color: '#000', fontSize: 14 }} >地址：</Text>
                                <Text>item.addr</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                                <Text style={{ color: '#000', fontSize: 14 }} >围栏名：</Text>
                                <Text>LJKJNK9876574576</Text>
                            </View>
                        </View>
                        <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity> */}
                    <FlatList
                        data={this.state.data}
                        refreshing={this.state.refreshing}
                        // onRefresh={this.handLoadData}
                        renderItem={this._renderItem}                        
                        onEndReached={this.getData()}
                        ListFooterComponent={this._renderFooter}
                    />
                </View>
            </View>
        )
    }
    _renderItem = (item) => {
        return 
            <TouchableOpacity
                style={{ flexDirection: 'row', marginLeft: 20, paddingRight: 20, marginTop: 20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1, alignItems: 'center' }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('Devicedetail', item)
                }} >
                <View style={{ flex: 1 }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                        <Text style={{ color: '#000', fontSize: 14 }} >设备号：</Text>
                        <Text>{item.devNo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                        <Text style={{ color: '#000', fontSize: 14 }} >车架号：</Text>
                        <Text>{item.vin}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                        <Text style={{ color: '#000', fontSize: 14 }} >地址：</Text>
                        <Text>{item.addr}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }} >
                        <Text style={{ color: '#000', fontSize: 14 }} >围栏名：</Text>
                        <Text>{item.fenceName}</Text>
                    </View>
                </View>
                <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
            </TouchableOpacity>
        this.getData();
    }
    getData(page = 1){
        instance.post(`${BASEURL}track/devListPage.action`,
            `page=${page}&rows=20`)
            .then(({ data }) => {
                console.log('数据', data)
                this.state.data=data;
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }
    handLoadData = () => {
        this.getData();
    }
    _renderFooter = () => {
        if (this.state.loadMore) {
            return (<View style={{ justifyContent: 'center', alignItems: 'center', height: 50 }} ><Text style={{ lineHeight: 50 }} >加载中...</Text></View>)
        } else {
            return null;
        }
    }
    componentDidMount() {
        // this.getData();
    }
}
