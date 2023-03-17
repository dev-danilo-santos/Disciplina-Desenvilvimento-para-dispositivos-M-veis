import React, {useState} from "react";
import {Text, View} from 'react-native'
import { Button } from "react-native-elements";
import styles from './style/styles'

const ResultScreen = ( {navigation, route} ) => {
    const[numero, setNumero] = useState(parseInt(route.params.numero))
    

    const PressButtonContinue = () => {
      
            navigation.navigate('Home', {numero})
        
    }

    return(
        <View style= {[styles.container]}>
            <View style = {[styles.subContainer, styles.container]}>

                <Text style={[styles.textStart]}>O número final é: </Text>

                <View style={[ styles.boxSum ]}> 

                    <View style={[styles.boxNumber]}>
                    <Text style={[styles.textNumber]}> { numero } </Text>
                    </View>

                </View>
                
                <Text style={ styles.textNormal } >Pressione o botão para voltar ao início</Text>
                <Button
                title = 'Voltar'
                style={styles.buttons}
                onPress={PressButtonContinue}
                />


            </View>
        </View>
    );
}

export default ResultScreen