import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import styles from './style/styles'

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


export default UserDetailsScreen