import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { STORAGE_KEYS } from '../../storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Style'

const Home = () => {
    const [selectedTime, setSelectedTime] = useState(20);
    const [timeLeft, setTimeLeft] = useState(selectedTime);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [historySaved, setHistorySaved] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePauseResume = () => {
        if (isRunning) {
            setIsPaused(true);
            setIsRunning(false);
        } else if (isPaused) {
            setIsPaused(false);
            setIsRunning(true);
        }
    };

    const resetTimer = () => {
        setTimeLeft(selectedTime);
        setIsRunning(false);
        setIsPaused(false);
        setIsCompleted(false);
        setIsModalVisible(false);
    };

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const progress = (timeLeft / selectedTime) * 100;
    const strokeDasharray = 283;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;

    const saveWorkoutHistory = async () => {
        try {
            const now = new Date();
            const historyObject = {
                Date: now.toISOString().split('T')[0], // YYYY-MM-DD format
                PresentTime: now.toLocaleTimeString(), // HH:MM:SS format
                TimerDuration: selectedTime,
                TimerName: "Workout"
            };

            const prevHistory = await AsyncStorage.getItem(STORAGE_KEYS.WORKOUT);
            let historyArray = prevHistory ? JSON.parse(prevHistory) : [];

            historyArray.push(historyObject);

            await AsyncStorage.setItem(STORAGE_KEYS.WORKOUT, JSON.stringify(historyArray));
            setHistorySaved(true);
            console.log("Workout history stored:", historyArray);
        } catch (error) {
            console.error("Error saving workout history:", error);
        }
    };

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsRunning(false);
            setIsPaused(false);
            setIsCompleted(true);
            setIsModalVisible(true);

            if (!historySaved) {
                saveWorkoutHistory();
            }
        }
        return () => {
            clearInterval(timer);
            setHistorySaved(false);
        };
    }, [isRunning, timeLeft]);

    useEffect(() => {
        setTimeLeft(selectedTime);
        setIsCompleted(false);
    }, [selectedTime]);

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Select Timer</Text>
                <Picker
                    selectedValue={selectedTime}
                    style={styles.picker}
                    onValueChange={(itemValue) => {
                        setSelectedTime(itemValue);
                        setTimeLeft(itemValue);
                        setIsPaused(false);
                    }}
                    enabled={!isRunning}
                >
                    <Picker.Item label="20 Seconds" value={20} />
                    <Picker.Item label="30 Seconds" value={30} />
                    <Picker.Item label="1 Minutes" value={60} />
                    <Picker.Item label="2 Minutes" value={120} />
                    <Picker.Item label="5 Minutes" value={300} />
                    <Picker.Item label="10 Minutes" value={600} />
                    <Picker.Item label="15 Minutes" value={900} />
                </Picker>
            </View>

            <View style={styles.timerContainer}>
                <Svg height="310" width="310" viewBox="0 0 100 100">
                    <Circle cx="50" cy="50" r="45" stroke="#222" strokeWidth="5" fill="none" />
                    <Circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#009FF8"
                        strokeWidth="4.5"
                        fill="none"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </Svg>

                <View style={styles.timerStatusContainer}>
                    {isCompleted ? (
                        <Text style={styles.completedText}>Completed</Text>
                    ) : (
                        <Text style={styles.timer}>
                            {minutes.toString().padStart(2, '0')}:
                            {seconds.toString().padStart(2, '0')}
                        </Text>
                    )}
                    <Text style={styles.statusText}>Workout</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttonContainer}>
                    {!isRunning && !isPaused && (
                        <TouchableOpacity
                            style={styles.startButton}
                            onPress={() => {
                                setTimeLeft(selectedTime);
                                setIsRunning(true);
                                setIsCompleted(false);
                            }}
                        >
                            <FontAwesome5 name="play-circle" size={30} color={'white'} />
                            <Text style={styles.buttonText}>
                                {isCompleted ? 'Restart' : 'Start'}
                            </Text>
                        </TouchableOpacity>
                    )}

                    {(isRunning || isPaused) && !isCompleted && (
                        <TouchableOpacity
                            style={isRunning ? styles.pauseButton : styles.resumeButton}
                            onPress={handlePauseResume}
                        >
                            {isRunning ? <FontAwesome5 name="pause-circle" size={30} color={'white'} /> : <FontAwesome5 name="play-circle" size={30} color={'white'} />}
                            <Text style={styles.buttonText}>{isRunning ? 'Pause' : 'Resume'}</Text>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.resetButton} onPress={resetTimer}>
                        <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ height: 50 }}></View>

            {/* Modal */}
            <Modal
                visible={isModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={() => setIsModalVisible(false)} // Handles back button on Android
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>Congratulations!</Text>
                    <Text style={styles.modalSubText}>You completed your Workout timer!</Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={() => setIsModalVisible(false)}
                    >
                        <Text style={styles.modalButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    );
};

export default Home;
