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

export default styles