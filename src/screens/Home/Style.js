import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        alignItems: 'center',
        gap: 40
    },
    timerStatusContainer: {
        alignItems: 'center',
        gap: 5,
        position: 'absolute',
        top: 180
    },
    completedText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4CAF50',
    },
    timerContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    pickerContainer: {
        backgroundColor: 'rgb(49, 62, 73)',
        padding: 10,
        borderRadius: 8,
        width: "90%",
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 20
    },
    pickerLabel: {
        color: 'white',
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        color: 'white',
        width: "100%",
    },
    timer: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
    },
    statusText: {
        color: 'white',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        gap: 15
    },
    startButton: {
        backgroundColor: 'rgb(66, 151, 46)',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10
    },
    pauseButton: {
        backgroundColor: 'rgb(129, 63, 63)',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10
    },
    resumeButton: {
        backgroundColor: 'rgb(49, 101, 118)',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        flexDirection: 'row',
        gap: 10
    },
    resetButton: {
        backgroundColor: '#FF9F1C',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center', width: '90%', alignSelf: 'center', top: 30 },
    modalText: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50' },
    modalSubText: { fontSize: 16, marginTop: 10 },
    modalButton: { marginTop: 20, backgroundColor: '#009FF8', borderRadius: 8, paddingHorizontal: 20, paddingVertical: 10 },
    modalButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

