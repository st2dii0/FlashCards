import React, { useState, useEffect } from "react";
import { Text } from 'react-native';
import SafeAreaView from "react-native-safe-area-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import cards from './cards';
import { View, Root, Item } from "native-base";


export default Game = ({ navigation }) => {
    const [id_Holder, set_Id] = useState(0);
    const [card, setCard] = useState({});

    useEffect(() => {
        const Random_Id = Math.floor(Math.random() * 10) + 1;
        set_Id(Random_Id)
        get_card(Random_Id)
        card.answers
    }, []);

    const get_card = (id) => {
        cards.map(item => {
            if (item.id === id) {
                console.log(item);
                return setCard(item)
            }
        })
    };
    
    const handleClick = (index) =>{
        if (index+1 === answer.correctAnswerIndex){
            alert('Correct answer')
        } else {
            alert('Wrong answer')
        }
    } 

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#df4646', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize: 24}}>{card.question}</Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0.5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {card && card.answers && card.answers.map((answer, index) => (
                        
                        <TouchableOpacity onPress={index+1 === answer.correctAnswerIndex ? alert('Correct answer') : alert('Wrong answer')}>
                            <Text> {answer}  </Text>
                        </TouchableOpacity> 
                    ))}
                </View>
            </SafeAreaView>
        </>
    )
}