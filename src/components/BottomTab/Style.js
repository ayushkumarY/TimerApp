import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 70,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: -3 }, // Top shadow direction
        shadowOpacity: 0.1, // Adjust opacity
        shadowRadius: 5, // Shadow blur radius
    },

    content: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    activeText: {
        color: 'blue',
        fontSize: 12,
        marginTop: 8
    },
    inactiveText: {
        color: 'black',
        fontSize: 12,
        marginTop: 8
    }
})