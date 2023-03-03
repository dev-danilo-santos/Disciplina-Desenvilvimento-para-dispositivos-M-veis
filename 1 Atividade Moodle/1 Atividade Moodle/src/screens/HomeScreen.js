import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import {Button} from 'react-native-elements';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

    },
    subContainer: {
        width: '40%',
        height: 'auto',
        backgroundColor: 'lightgray',
        borderRadius: 5,
    },
    textTitle: {
        fontSize: 25,
        marginBottom: 50,
    },
    commonText: {
        marginVertical: 10,
    },
    buttons: {
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        marginVertical: 10
    }
})

export default HomeScreen;