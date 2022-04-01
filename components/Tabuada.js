import React from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native-web";

export default function Tabuada(props){
    let texto = [];
    for(let x=0;x <=10;x++){
        texto.push(
        <Text>{props.num}x{x}= {x*props.num}</Text>
        )}
    return(
        <>
        <View style={styles.texto}>
            {texto}
        </View>
        </>
    );
}

const styles = StyleSheet.create({
     texto:{
         fontSize: 30
     }
});