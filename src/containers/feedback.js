import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button, Alert } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Page } from '../components/page';
import { Flex } from '../components/flex';
import { getfeedback } from '../service';
import config from './config.js';

export class FeedbackScreen extends React.Component{
    constructor(props) {
        super(props);
        this.feedvalue = '';
        this.state={
            text:''
        }
    }
    feedInfo = {
        content: '',
        env: ''
    }
    render(){
        const { navigate, goBack } = this.props.navigation;   
        return(
            <View>
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
                {/* 状态栏 */}
                <Flex column style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15 }} >
                    <Text style={{fontSize:16}} >问题和意见</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        // multiline = {true}
                        // onChangeText ={
                        //     (event)=>{
                        //         this.feedvalue=event.nativeEvent.text;
                        //     }
                        // }
                        value={this.state.text}                      
                        onChange={(e) => { this.feedvalue = e.nativeEvent.text }}
                        style={{ width: '100%', height: 100, marginTop: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 5, paddingRight: 5, borderWidth: 1, borderColor: '#d1d1d1', textAlignVertical: 'top' }}
                        underlineColorAndroid={'transparent'}    
                        />
                    <TouchableOpacity
                        onPress={
                            this.submit
                        }
                        style={{ width: '100%', height: 50, marginTop: 10, marginBottom: 14, justifyContent: 'center', alignItems: 'center', backgroundColor: '#21b3ff', borderRadius: 5 }}
                    >
                        <Text style={{fontSize:18, color:'#fff'}} >提交</Text>                    
                    </TouchableOpacity>
                </Flex>
            </View>
        )
    }
    submit=()=>{
        const { navigate, goBack } = this.props.navigation;   
        let feedInfo = {
            content: this.feedvalue,
            env: `软件版本号${config.versio}`
        }
        if (this.feedvalue.length == 0) {
            Alert.alert('反馈内容不能为空');
            return;
        }
        getfeedback(`content=${this.feedvalue}&env=${feedInfo.env}`, (data)=>{
            if ('0' != retcode) {
                Alert.alert(retmsg);
                return;
            }
            Alert.alert('感谢反馈');
                goBack();
        })
    }
}