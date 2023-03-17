import React, {useState} from "react";
import {Text, View, TextInput} from 'react-native'
import { Button } from "react-native-elements";
import styles from './Style/styles'

const HomeScreen = ( {navigation} ) => {
    const[nome, setNome] = useState('')
    const inputName = (Text) => {
        setNome(Text);
    };
    const PressButtonContinue = () => {
        navigation.navigate('Welcome', {nome})
    }

    return(
        <View style= {[styles.container]}>
            <View style = {[styles.subContainer, styles.container]}>

            <Text style={[styles.textStart]}>Insira seu Nome</Text>
            <TextInput
            style = {styles.input}
            placeholder = "Nome"
            value={nome}
            onChangeText = { inputName }
             
            />
            <Button
            title = 'Continue'
            style={styles.buttons}
            onPress={PressButtonContinue}
            />


            </View>
        </View>
    );
}

export default HomeScreen