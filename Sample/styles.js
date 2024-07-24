import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    
    safeArea: {
        flex: 1,
        flexDirection: 'column'
    },

    topContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 16
    },

    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16
    },

    boxContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        padding: 16
    },

    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },

    box1: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },

    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },

    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
