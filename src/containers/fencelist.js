import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Image, Button, ScrollView, FlatList } from 'react-native';
// import { Page } from '../components/page';
import { getfencelist } from '../service';

export class FencelistScreen extends React.Component {
    page = 1
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ height: '100%', position: 'relative', backgroundColor: '#fff' }} >
                <StatusBar backgroundColor={'#3285ff'} translucent={true} barStyle='light-content' />
                <View style={{ backgroundColor: '#3285ff', height: 44, flexDirection: 'row', justifyContent: 'center', position: 'relative' }} >
                    <TouchableOpacity
                        onPress={() => {
                            goBack()
                        }}
                        style={{ width: 44, height: 44, position: 'absolute', top: 0, left: 0 }}>
                        <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
                    </TouchableOpacity>
                    <Text style={{ width: '70%', fontSize: 18, color: '#fff', lineHeight: 44, textAlign: 'center', fontWeight: 'bold' }} >设备列表页</Text>
                </View>
                <ScrollView style={{ flex: 1 }} >
                    {/* <View style={{ flexDirection: 'row', marginLeft: 20, paddingRight: 20, marginTop: 20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1, alignItems: 'center' }} >
                        <Text style={{ flex: 1 }} >asjkdhkjdsbfkj</Text>
                        <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
                    </View> */}
                    <FlatList
                        data={this.state.data}
                        renderItem={this._renderItem}
                    />
                </ScrollView>
            </View>
        )
    }
    _renderItem = ({ item }) => {
        return <View style={{ flexDirection: 'row', marginLeft: 20, paddingRight: 20, borderBottomColor: '#d1d1d1', borderBottomWidth: 1, alignItems: 'center' }} >
            <Text style={{ flex: 1 }} >{item.fenceNo}</Text>
            <Image source={require('../img/arrow.png')} style={{ width: 44, height: 44 }} />
        </View>
    }
    getData = (page = 1) => {
        getfencelist(`page=${page}&rows=20`, (data) => {
            console.log(data)
            this.setState({ data: data })
        })
    }
    componentDidMount() {
        this.getData()
    }
}
