import React, { Component } from "react";
import { Text, Button, Image } from "react-native";
import { withNavigation } from 'react-navigation';
import SafeAreaView from "react-native-safe-area-view";



export default Main = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/flashcard.png')} />
            <Button title='Start' type='outline' color='#d32f2f' onPress={() => navigation.navigate('Game')} />
        </SafeAreaView>
    )
}
