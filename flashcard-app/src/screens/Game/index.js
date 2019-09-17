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

    }, []);

    const get_card = (id) => {
        cards.map(item => {        
            if (item.id === id) {
                console.log(item);
                return setCard(item)
            }
        })
        // cards.find(item => {
        //     console.log(item);
        //     if(item.id === id_Holder){
        //         return setCard(item)
        //     }
        // })
    };




    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#df4646', justifyContent: 'center', alignItems: 'center' }}>
                <Text>{card.id}</Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 0.5, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text>  Touch here  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>  Touch here  </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Text>  Touch here  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>  Touch here  </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}