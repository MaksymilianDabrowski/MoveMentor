import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Exercises() {
    const router = useRouter();
    const item = useLocalSearchParams();
    console.log('got item: ', item);
    return(
        <View className="mt-20">
            <Text> Exercises </Text>
         <TouchableOpacity onPress={()=> router.back()}>
            <Text> Go back </Text>
        </TouchableOpacity>
         </View>
    )
}