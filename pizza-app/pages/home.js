import React, { Component } from 'react';
import { View } from 'native-base';
import { Image } from 'react-native';

class Home extends Component {
    
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: 500
            }}>
                <View style={{ paddingTop: 20, paddingBottom: 40 }}>
                    <Image source={require('../assets/pizza.png')}
                        style={{ width: 270, height: 168 }} />
                </View>
            </View>)
    }

}

export default Home;