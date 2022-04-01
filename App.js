import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, onChangeText } from 'react-native';
import Componente from './components/Componente';
import Tabuada from './components/Tabuada';

export default function App() {
  return (
    <View style={styles.container}>
      <Componente nome="João Tonho" idade="40"/>
      <View  style={styles.row}>
        <Text style={styles.texto}>Número: </Text>
        <TextInput
         style={styles.input}
         value={num}
         onChangeText={(value)=>setNum(value)}
         />
        <View style={styles.texto}>
        <Tabuada num={num}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    width: '100%',
    marginTop: 10,
  },
  input:{
    width: '80%',
    borderWidth: 1,
    marginLeft: '10%',
    fontSize: 30,
    borderRadius: 5,
  },
  texto:{
    fontSize: 30,
    marginLeft: '',
    alignItems: 'center',
    textAlign: 'center',
  }
});
