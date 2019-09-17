import React, { Component } from "react";
import { Image } from "react-native";
import { Button, Text } from 'native-base';
import SafeAreaView from "react-native-safe-area-view";



export default Main = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../../../assets/flashcard.png')} />
            <Button danger onPress={() => navigation.navigate('Game')}>
                <Text>/ Start /</Text>
            </Button>
        </SafeAreaView>
    )
}
