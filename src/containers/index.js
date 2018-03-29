import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { LoginScreen } from './login';
import { HomeScreen } from './home';
import { UserScreen } from './user';
import { DevicelistScreen } from './devicelist';
import { AboutScreen } from './about';

export const Index = StackNavigator({
    /**
     * 登录页
     */
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    },
    /**
    * 首页
    */
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    },
    /**
     * 个人中心
     */
    User: {
        screen: UserScreen,
        navigationOptions: {
            header: null
        }
    },
    /**
     * 设备列表页
     */
    Devicelist: {
        screen: DevicelistScreen,
        navigationOptions: {
            header: null
        }
    },
    /**
     * 关于我们页
     */
    About: {
        screen: AboutScreen,
        navigationOptions: {
            header: null
        }
    },
});


// export class Index extends React.Component{
//     render(){
//         return(
//             <View>
//                 <Text>哈哈哈</Text>
//             </View>
//         )
//     }
// }