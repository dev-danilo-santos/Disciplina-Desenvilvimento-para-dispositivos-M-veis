import React from 'react';
import {Text, StyleSheet, View, TextInput}  from 'react-native';
import styles from './style/styles'

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


export default AboutScreen