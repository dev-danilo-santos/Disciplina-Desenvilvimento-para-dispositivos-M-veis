import React, {useState} from "react";
import {Text, View, TextInput} from 'react-native'
import { Button } from "react-native-elements";
import styles from './Style/styles'

const WelcomeScreen = ( {navigation, route} ) => {
    const[numero, setNumero] = useState('')
    const inputNumero = (Text) => {

        setNumero(Text.replace(/[^0-9]/g, ''));
    };
    
    const[mensagem, setMensagem] = useState('')
    const inputMensagem = (Text) => {
        setMensagem(Text);
    }

    const PressButtonContinue = () => {
        if(numero > 10 || numero < 1)
            setMensagem(true)
        else 
            navigation.navigate('Sum', {numero})
    }



    return(
        <View style= {[styles.container]}>
            <View style = {[styles.subContainer, styles.container]}>

            <Text style={[styles.textStart]}>Olá {route.params.nome} </Text>
            <Text style={[styles.textStart]}>Insira um número de 1 a 10</Text>

            <TextInput
            style = {styles.input}
            placeholder = "Insira seu número aqui"
            value={numero}
            onChangeText = { inputNumero }
            keyboardType="numeric"
            />
            { mensagem ? <Text style={[styles.textErro]}>Não é possível inserir um texto fora do intervalo</Text> : null}
            <Button
            title = 'Continue'
            style={styles.buttons}
            onPress={PressButtonContinue}
            />


            </View>
        </View>
    );
}

export default WelcomeScreen