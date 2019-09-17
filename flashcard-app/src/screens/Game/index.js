import React, { useState, useEffect } from "react";
import { Text, Alert } from 'react-native';
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import cards from './cards';
import { View } from "native-base";


export default Game = ({ navigation }) => {
    const [id_Holder, set_Id, updatedState] = useState(0);
    const [card, setCard] = useState({});

    useEffect(() => {
        const Random_Id = Math.floor(Math.random() * 10) + 1;
        set_Id(Random_Id)
        get_card(Random_Id)
        card.answers
    }, [updatedState]);

    const get_card = (id) => {
        cards.map(item => {
            if (item.id === id) {
                return setCard(item)
            }
        })
    };
    
    return (
        <>
        <Text> How to play? Choose the correct answer between the 4 choices</Text>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#df4646', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize: 19, fontStyle: 'italic'}}>{card.question}</Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0.5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {card && card.answers && card.answers.map((answer, index) => (
                          <TouchableOpacity onPress={() => index+1 === card.correctAnswerIndex ? Alert.alert(
                            'C0rr3ct!',
                            '0nto the n3xt one!',
                            [
                                {text: 'Cancel', onPress: () => navigation.navigate('Main')},
                                {text: 'Next', onPress: () => updatedState},
                            ],
                            {cancelable: false},
                            ):Alert.alert(
                                'Wr0ng!',
                                'g0 again!',
                                {text: 'Ok'},
                            )}> 
                            <Text>|{answer}|</Text>
                        </TouchableOpacity> 
                    ))}
                </View>
               
            </SafeAreaView>
        </>
    )
}