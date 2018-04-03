import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
// import { StackNavigator } from 'react-navigation';


export class HomeScreen extends React.Component {
    static navigationOptions = {
    };
    constructor(props) {
        super(props);
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ height: '100%', position: 'relative', backgroundColor:'#fff' }} >
                <StatusBar backgroundColor={'#3285ff'} translucent={true} barStyle='light-content' />
                <View style={{ height: 60, backgroundColor: '#3285ff', paddingTop: 20, position: 'relative' }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', lineHeight: 40, color: '#fff' }} >智慧运输</Text>
                    <TouchableOpacity onPress={() => {
                        navigate('User')
                    }}
                        style={{ position: 'absolute', top: 20, right: 10, width: 40, height: 40 }}>
                        <Text style={{ color: '#fff', lineHeight: 40, textAlign: 'right' }} >设置</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={require('../img/banner.png')} style={{ width: '100%', height: 215 }} />
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20, backgroundColor: '#fff' }} >
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1, paddingBottom:20, paddingTop:20 }} >
                        <View style={{ width: 70, height: 70, marginRight: 15 }} >
                            <Image
                                source={require('../img/indexTwo.png')}
                                style={{ width: 70, height: 70 }} />
                        </View>
                        <View style={{justifyContent:'center'}} >
                            <Text style={{ fontSize: 16, color: '#6089f4', marginBottom: 15 }} >全图统计</Text>
                            <Text style={{ fontSize: 14, color: '#a1a1a1' }} >即时为您更新、展示最新数据</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{(
                            navigate('Devicelist')
                        )}}
                        style={{ flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1, paddingBottom:20, paddingTop:20 }} >
                        <View style={{ width: 70, height: 70, marginRight: 15 }} >
                            <Image
                                source={require('../img/indexThree.png')}
                                style={{ width: 70, height: 70 }} />
                        </View>
                        <View style={{justifyContent:'center'}} >
                        <Text style={{fontSize:16, color:'#ef9952', marginBottom: 15}} >设备预警</Text>
                                <Text style={{fontSize:14, color:'#a1a1a1'}} >位置服务、轨迹回放、报警历史</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{(
                            navigate('Fencelist')
                        )}}
                        style={{ flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1, paddingBottom:20, paddingTop:20 }} >
                        <View style={{ width: 70, height: 70, marginRight: 15 }} >
                            <Image
                                source={require('../img/indexOne.png')}
                                style={{ width: 70, height: 70 }} />
                        </View>
                        <View style={{justifyContent:'center'}} >
                            <Text style={{fontSize:16, color:'#37bd90', marginBottom: 15}} >围栏管理</Text>
                            <Text style={{fontSize:14, color:'#a1a1a1'}} >创建围栏、选择管理围栏</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
