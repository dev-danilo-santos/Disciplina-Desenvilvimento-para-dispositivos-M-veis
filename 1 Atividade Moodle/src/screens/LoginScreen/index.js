import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style/styles'

const LoginScreen = ({ navigation }) => {
    const pressButtonLogin = () => {
        navigation.navigate('Home');
    }

    return (
           <View style = {styles.container}>

                <View style = {[styles.subContainer, styles.container]}>

                    <TextInput 
                        style = {styles.input}
                        placeholder= "Usuário"

                        />

                    <TextInput
                        style={styles.input}
                        placeholder= "Senha"
                        secureTextEntry= "true"

                        />

                    <Button
                        style = {styles.buttons}
                        title='Login'
                        onPress={pressButtonLogin}
                        />

                </View>
           </View> 
    );
}

export default LoginScreen;