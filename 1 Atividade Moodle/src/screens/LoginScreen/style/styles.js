import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    subContainer: {
        width: '40%',
        backgroundColor: 'lightgray',
        borderRadius: 5
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginbotton: 10,
        width: '80%',
        margin: 5,
        backgroundColor: 'white'
    },
    buttons: {
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        marginTop: 30,
    }
});

export default styles