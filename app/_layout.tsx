<<<<<<< HEAD
import { View, Text, LogBox } from 'react-native'
=======
import { View, Text } from 'react-native'
>>>>>>> 3ed9f37ad144b2c80ef05a34ab8c94aedf2f564e
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
<<<<<<< HEAD
    LogBox.ignoreLogs(["Warning: Failed prop type"])
=======
>>>>>>> 3ed9f37ad144b2c80ef05a34ab8c94aedf2f564e
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
<<<<<<< HEAD
        >
            <Stack.Screen name="exercises" options={{
                presentation: 'fullScreenModal'
            }}  />
            <Stack.Screen name="exerciseDetails" options={{
                            presentation: 'modal'
                        }}  />
        </Stack>
=======
        />
>>>>>>> 3ed9f37ad144b2c80ef05a34ab8c94aedf2f564e
    )
}