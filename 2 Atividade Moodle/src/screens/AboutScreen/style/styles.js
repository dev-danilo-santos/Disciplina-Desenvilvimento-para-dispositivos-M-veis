import { StyleSheet } from "react-native"

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


export default styles