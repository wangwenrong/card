import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button } from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import { Page, Header } from '../components/page';
import { Flex } from '../components/flex';

export class AboutScreen extends React.Component{
    render(){
        return(
            // <View>
            //     <Header title='关于我们' ></Header>
            // </View>
            <Page title='关于我们' >
                <Text>关于我们关于我们关于我们关于我们关于我们</Text>
                <Flex>
                    <Text>关于我们关于我们关于我们关于我们关于我们</Text>              
                </Flex>
            </Page>
        )
    }
}