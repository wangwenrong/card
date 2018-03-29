import React from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
// import { StackNavigator, NavigationActions } from 'react-navigation';



export class LoginScreen extends React.Component {
    render() {
        const { navigate, goBack, state } = this.props.navigation;
        return (
            <View style={{ height: '100%', position: 'relative', justifyContent: 'center' }} >
                <StatusBar backgroundColor={'#3285ff'} translucent={true} barStyle='dark-content' />
                <View style={{ marginLeft: 20, marginRight: 20 }} >
                    <View style={{ height: 80, borderRadius: 5, borderBottomColor: '#d1d1d1', borderBottomWidth: 1, borderLeftColor: '#d1d1d1', borderLeftWidth: 1, borderRightColor: '#d1d1d1', borderRightWidth: 1, borderTopColor: '#d1d1d1', borderTopWidth: 1 }} >
                        <View style={{ height: 40, flexDirection: 'row', alignItems: 'center', borderBottomColor: '#d1d1d1', borderBottomWidth: 1, borderBottomColor: '#d1d1d1', borderBottomWidth: 1 }} >
                            <Text style={{ lineHeight: 40, marginLeft: 10, marginRight: 10 }} >登录</Text>
                            <TextInput
                                style={{ flex: 1 }}
                                multiline={true}
                                placeholder='请输入账号'
                                numberOfLines={1}
                            >
                            </TextInput>
                        </View>
                        <View style={{ height: 40, flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ lineHeight: 40, marginLeft: 10, marginRight: 10 }} >密码</Text>
                            <TextInput
                                style={{ flex: 1 }}
                                multiline={true}
                                placeholder='请输入密码'
                                numberOfLines={1}
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style={{ backgroundColor: '#007AFF', marginTop: 20, marginBottom: 20, borderRadius: 5 }} >
                        <Button
                            onPress={() => {
                                // const { navigate } = this.props.navigation;
                                // navigate('Home')
                                this.handleLogin()
                            }}
                            title='登录'
                            color='#fff'
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }} >
                        <Image
                            source={require('../img/checked.png')}
                            style={{ width: 15, height: 15, marginRight: 10 }}
                        />
                        <Text>自动登录</Text>
                    </View>
                </View>
            </View>
        )
    }
    handleLogin = () => {
        const { navigate } = this.props.navigation;
        const BASEURL = 'http://gis.cloud.rtzltech.cn:8010/monitoringserver/';
        let instance = axios.create({
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': '*/*',
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
        instance.post(`${BASEURL}login`,
            `loginname=obdtest&pwd=1234`)
            .then(({ data }) => {
                console.log('数据', data)
                navigate('Home')
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }
}
