import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    noDataText: {
        color: 'gray',
        textAlign: 'center',
        marginTop: 20,
    },
    historyItem: {
        backgroundColor: 'rgb(49, 62, 73)',
        padding: 15,
        borderRadius: 10,
        gap: 5
    },
    dateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    timeText: {
        color: 'lightgray',
        fontSize: 14,
    },
    timerText: {
        color: '#4CAF50',
        fontSize: 14,
        fontWeight: 'bold',
    },
    nodatatxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'medium',
        marginTop: 20
    }
});
