import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { LoginScreen } from './login';
import { HomeScreen } from './home';
import { UserScreen } from './user';
import { DevicelistScreen } from './devicelist';
import { FencelistScreen } from './fencelist';
import { AboutScreen } from './about';
import { FeedbackScreen } from './feedback';


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
     * 围栏列表页
     */
    Fencelist: {
        screen: FencelistScreen,
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
    /**
     * 意见反馈
     */
    Feedback: {
        screen: FeedbackScreen,
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