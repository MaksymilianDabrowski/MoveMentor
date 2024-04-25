import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons'
import ImageSlider2 from '../components/ImageSlider'
import BodyParts from '../components/BodyParts'

export default function Home() {
    return (
        <SafeAreaView className='flex-1 bg-white flex space-y-5' edges={['top']}>
            <StatusBar style='dark' />


            <View className='flex-row justify-between items-center mx-5'>
                <View className='space-y-2'>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-neutral-700'
                    >
                        Gotowy do
                    </Text>
                    <Text
                        style={{ fontSize: hp(4.5) }}
                        className='font-bold tracking-wider text-rose-500'
                    >
                        treningu?
                    </Text>
                </View>

                {/* logo jest statyczne - można pomyśleć o koncie dla użytkownika */}
                <View className='flex justify-center items-center space-y-2'>
                    <Image
                        source={require('../assets/images/avatar.jpg')}
                        style={{ height: hp(6), width: hp(6) }}
                        className='rounded-full'
                    />
                    <View className='bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300'
                        style={{ height: hp(5.5), width: hp(5.5) }}>
                        <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            {/* slider */}
            <View>
                <ImageSlider2 />
            </View>

            {/* body parts list */}
            <View className="flex-1">
                <BodyParts />
            </View>
        </SafeAreaView>
    )
}