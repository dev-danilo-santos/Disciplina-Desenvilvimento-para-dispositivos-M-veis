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
    },
    textStart: {
        fontSize: 25,
        fontStyle: "bold"
    },
    textErro: {
        color: 'red'
    },
    boxNumber: {
        width: 100,
        height: 100,
        backgroundColor: "rgb(32, 137, 220)",
        borderRadius: 5,
        marginTop: 20,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginHorizontal: 5
    },
    textNumber: {
        fontSize: 25,
        color: "white"
    },
    boxSum: {
        display: "flex",
        flexDirection: 'row'
    },
    buttonMath: {
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        width: 80,
        height: 80,
        marginTop: 50,
        marginHorizontal: 20
    }
});

export default styles