import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style/styles';

const HomeScreen = ({ navigation }) => {
    const pressButtonAbout = () => {
        navigation.navigate('About')
    }
    const pressButtonUserDetails = () => {
        navigation.navigate('UserDetails')
    }

    return(
        <View style={styles.container} >

            <View style={[styles.subContainer, styles.container]} >
            <Text style={styles.textTitle}>Welcome Danilo to our first project.</Text>
            <Text style={styles.commonText} >Now we can navigate between screens!</Text>
            <Text style={styles.commonText} >How are you feeling?</Text>

            <Button
            style={styles.buttons}
            title='User Details'
            onPress={pressButtonUserDetails}
            ></Button>

            <Button
            style={styles.buttons}
            title='About'
            onPress={pressButtonAbout}
            />
            </View>

        </View>
    )
}



export default HomeScreen;