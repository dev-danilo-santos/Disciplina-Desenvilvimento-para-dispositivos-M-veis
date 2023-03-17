import React, {useState} from "react";
import {Text, View} from 'react-native'
import { Button } from "react-native-elements";
import styles from './Style/styles'

const SumScreen = ( {navigation, route} ) => {
    const[numero, setNumero] = useState(parseInt(route.params.numero))
    
    const incrementNumber = () => {
        if(numero < 10)
            setNumero(numero + 1);
    };

    const decrementNumber = () => {
        if(numero > 1 )
        setNumero(numero -1);
    };
    
    const PressButtonContinue = () => {
      
            navigation.navigate('Result', {numero})
        
    }

    return(
        <View style= {[styles.container]}>
            <View style = {[styles.subContainer, styles.container]}>

                <Text style={[styles.textStart]}>Incremente ou Decremente o número</Text>

                <View style={[ styles.boxSum ]}> 


                    <Button 
                     title= '-'
                     style={[styles.buttonMath]}
                     onPress={decrementNumber}
                     />

                    <View style={[styles.boxNumber]}>
                    <Text style={[styles.textNumber]}> { numero } </Text>
                    </View>

                    <Button 
                    title= '+'
                    style={[styles.buttonMath]}
                    onPress={incrementNumber}
                    />
                    

                </View>
                
                
                <Button
                title = 'Continue'
                style={styles.buttons}
                onPress={PressButtonContinue}
                />


            </View>
        </View>
    );
}

export default SumScreen