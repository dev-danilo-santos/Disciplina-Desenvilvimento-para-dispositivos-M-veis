import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.container, styles.subContainer]} >
            <Text style={styles.textBold}> About</Text>
            <Text style={styles.textNormal}> Developed by Danilo Santos</Text>
            <Text style={styles.textBold}> Version</Text>
            <Text style={styles.textNormal}> FirstApp version 1.0</Text>
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
    textBold: {
        fontWeight: 'bold'
    },
    subContainer: {
        width: '30%',
        backgroundColor: 'lightgray',
        borderRadius: 5,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        maxHeight: 400,
    },
    textNormal: {
        marginBottom: 10,
    }
})

export default AboutScreen