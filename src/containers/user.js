import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export class UserScreen extends React.Component {
    static navigationOptions = {
    };
    render() {
        const { navigate, goBack } = this.props.navigation;
        return (
            <View style={{ height: '100%', position: 'relative' }} >
                <StatusBar backgroundColor={'#3285ff'} translucent={true} barStyle='light-content' />
                <View style={{ backgroundColor: '#3285ff', height: 44, flexDirection: 'row', justifyContent: 'center', position: 'relative' }} >
                    <TouchableOpacity
                        onPress={() => {
                            (
                                goBack()
                            )
                        }}
                        style={{ width: 44, height: 44, position: 'absolute', top: 0, left: 0 }}>
                        <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity>
                    <Text style={{ width: '70%', fontSize: 18, color: '#fff', lineHeight: 44, textAlign: 'center', fontWeight: 'bold' }} >个人中心</Text>
                </View>
                <View style={{paddingLeft:20}} >
                    <TouchableOpacity 
                        onPress={()=>{
                            navigate('About')
                        }}
                        style={{height:40, alignItems:'center', flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1 }} >
                        <Text>关于我们</Text>
                        <Image source={require('../img/arrow.png')} style={{width:30, height:30}} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={()=>{
                            navigate('Feedback')
                        }}
                        style={{height:40, alignItems:'center',  flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1 }} >
                        <Text>意见反馈</Text>
                        <Image source={require('../img/arrow.png')} style={{width:30, height:30}} />
                    </TouchableOpacity>
                    <View style={{height:40, alignItems:'center',  flexDirection: 'row', borderBottomColor:'#d1d1d1', borderBottomWidth:1 }} >
                        <Text>软件版本</Text>
                        <Text>V1.40</Text>
                    </View>
                </View>
            </View>
        )
    }
}
