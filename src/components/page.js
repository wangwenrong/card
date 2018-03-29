import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button, Dimensions, Platform } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';


const X_WIDTH = 375;
const X_HEIGHT = 812;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export function isIphoneX() {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
            (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
    )
}

export function Header({ title, headBg, headColor }) {
    return <View style={{ backgroundColor: headBg, width:'100%', height: 44, flexDirection: 'row', justifyContent: 'center', alignItems:'center', position: 'relative' }} >
        <TouchableOpacity onPress={() => {
            const { navigate, goBack } = navigation;
            goBack();
        }}
            style={{ width: 44, height: 44, position: 'absolute', top: 0, left: 0 }}>
            <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
        </TouchableOpacity>
        <Text
            numberOfLines={1}
            style={{ width: '70%', fontSize: 18, color: headColor, lineHeight: 44, textAlign: 'center', fontWeight: 'bold' }} >
            {title}
        </Text>
    </View >
}
export class Page extends React.Component {
    // props: FlexProps;
    render() {
        let { style, title, children, headBg = '#3285ff', headColor = '#fff', dom, other } = this.props;
        let styles = {
            height: '100%',
            width: '100%'
        }
        return (
            <View ref={dom} style={[styles, { paddingBottom: (isIphoneX()) ? 34 : 0 }]} {...other}>
                {title ? <Header title={title} headColor={headColor} headBg={headBg} /> : null}
                <View style={{ flex: 1 }} >
                    {children}
                </View>
            </View >
        )
    }
}