import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button, Dimensions, Platform } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

export class Flex extends React.Component{
    render(){
        let { style, column, horizontal, vertical, HW, flex1, children, dom, other } = this.props;
        if(!style){
            style={}
        }
        if(!column){
            style.flexDirection = 'row';
        }
        if(horizontal){
            style.justifyContent = 'center';
        }
        if(vertical){
            style.alignItems='center';
        }
        if(HW){
            style.justifyContent = 'center';
            style.alignItems='center';
        }
        if(flex1){
            style.flex=1
        }
        return(
            <View style={style} ref={dom} {...other} >
                {children}
            </View>
        )
    }
}
