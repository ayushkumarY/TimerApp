import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Home from '../Home/Home'
import BottomTab from '../../components/BottomTab/BottomTab'
import History from '../History/History'

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            {
                activeTab === 0 ?
                    <Home />
                    :
                    <History />
            }
            <BottomTab setActiveTab={setActiveTab} />
        </>
    )
}

export default Dashboard