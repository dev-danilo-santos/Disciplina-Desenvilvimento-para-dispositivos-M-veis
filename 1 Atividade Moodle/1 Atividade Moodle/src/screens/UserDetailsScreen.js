import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';

const UserDetailsScreen = () => {
    return (
        <View style={styles.container} >
            <View style={[styles.container, styles.subContainer]} >
            <Text style={styles.textBold} >Name</Text>
            <Text style={styles.textNormal} >Danilo Santos</Text>
            <Text style={styles.textBold} >Age</Text>
            <Text style={styles.textNormal}>23 years and 12 months</Text>
            <Text style={styles.textBold} >Email</Text>
            <Text style={styles.textNormal}>danilo.mateus@estudante.igoiano.edu.br</Text>
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
        padding: 20,
        maxHeight: 400
    },
    textNormal: {
        marginBottom: 10,
    }
})

export default UserDetailsScreen