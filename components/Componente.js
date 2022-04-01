import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Componente(props){
    return(
        <>
            <Text>Nome: {props.nome}, Idade: {props.idade}</Text>
        </>//não é necessario abrir uma view.
    );
}

const styles = StyleSheet.create({
    //aqui vem os estilos da pag.
    
});