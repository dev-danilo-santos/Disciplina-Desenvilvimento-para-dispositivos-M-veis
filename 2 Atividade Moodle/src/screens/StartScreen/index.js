import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style/styles'

const LoginScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const inputName = (text) => {
        setNome(text);
      };  
    const pressButtonLogin = () => {
        navigation.navigate('Home');
    }

    return (
           <View style = {styles.container}>

                <View style = {[styles.subContainer, styles.container]}>
                    <Text style = {styles.textStart}>Insira seu nome</Text>
                    <TextInput 
                        style = {styles.input}
                        placeholder= "Nome"
                        value={nome}
                        onChangeText={inputName}
                        />

                    <Button
                        style = {styles.buttons}
                        title='Próximo'
                        onPress={pressButtonLogin}
                        />

                </View>
           </View> 
    );
}

export default LoginScreen;