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
    buttons: {
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        width: 200,
        marginTop: 5,
    },
    textStart: {
        fontSize: 25,
        fontStyle: "bold"
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
    textNormal : {
        marginTop: 10
    }
});

export default styles