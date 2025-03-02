import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, RefreshControl } from 'react-native';
import { STORAGE_KEYS } from '../../storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style'

const History = () => {
    const [history, setHistory] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const fetchHistory = async () => {
        const savedHistory = await AsyncStorage.getItem(STORAGE_KEYS.WORKOUT);
        setHistory(savedHistory ? JSON.parse(savedHistory) : []);
    };

    const ListEmptyComponent = () => (
        <Text style={styles.nodatatxt}>{refreshing ? 'Fetching data...' : 'No History'}</Text>
    )

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <FontAwesome5 name={"history"} size={24} color={'white'} />
                <Text style={styles.header}>Workout History</Text>
            </View>

            <FlatList
                data={history.reverse()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <Text style={styles.dateText}>{item.Date}</Text>
                        <Text style={styles.timeText}>{item.PresentTime}</Text>
                        <Text style={styles.timerText}>
                            {item.TimerName}: {item.TimerDuration} sec
                        </Text>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl
                    onRefresh={fetchHistory}
                    refreshing={refreshing}
                />}
                onEndReachedThreshold={0.5}
                refreshing={refreshing}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 12 }}></View>
                )}
                ListEmptyComponent={ListEmptyComponent}
            />
            <View style={{ height: 60 }}></View>
        </View>
    );
};

export default History;

