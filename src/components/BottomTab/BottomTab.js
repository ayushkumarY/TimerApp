import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './Style'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const BottomTab = ({ setActiveTab }) => {

    return (
        <View style={Styles.container}>
            <TouchableOpacity style={Styles.content} onPress={() => setActiveTab(0)}>
                <FontAwesome5 name={"running"} size={24} />
                <Text style={Styles.inactiveText}>Workout</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={Styles.content}>
                <FontAwesome5 name={"book-reader"} size={24} />
                <Text style={Styles.inactiveText}>Study</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.content}>
                <FontAwesome5 name={"stopwatch"} size={24} />
                <Text style={Styles.inactiveText}>Break</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={Styles.content} onPress={() => setActiveTab(1)}>
                <FontAwesome5 name={"history"} size={24} />
                <Text style={Styles.inactiveText}>History</Text>
            </TouchableOpacity>

        </View>
    );
};

export default BottomTab;



