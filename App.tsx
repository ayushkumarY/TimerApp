import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Application from './src/navigation/Application'

const App = () => {
  return (
    <NavigationContainer>
      <Application />
    </NavigationContainer>
  )
}

export default App