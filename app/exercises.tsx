import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { demoExercises } from '../constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ExerciseList }  from '../components/ExerciseList';
import { ScrollView } from 'react-native-virtualized-view';

export default function Exercises() {
    const router = useRouter();
    {/* odkomentowac jak sie naprawi a usunac linijke pod spodem - 15, const [exercises, setExercises] = useState([]);*/}
    const [exercises, setExercises] = useState(demoExercises);
    const item = useLocalSearchParams();
//     console.log('got item: ', item);

    useEffect(()=>{
         if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodyPart)=>{
        let data = await fetchExercisesByBodypart(bodyPart);
//         console.log('got data: ', data);
        setExercises(data);
    }
    return (
    <ScrollView>
        <StatusBar style="light" />
        <Image
            source={item.image}
            style={{width: wp(100), height: hp(45), borderRadius: 40}}
        />
        <TouchableOpacity
            onPress={()=> router.back()}
            className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
            style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
        >
            <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>
    {/* exercises */}
    <View className="mx-4 space-y-3 mt-4">
        <Text>
            {item.name} exercises
        </Text>
        <View className="mb-10">
        {/* Wywala błąd, powinna być ta linijka: <ExerciseList data={exercises} />,
        jak sie to naprawi to powinno dzialac,
        ewentualnie jakby było zle to moze zrobic tak jak demoExercises w pliku index.ts
        */}
         <Text>
                    Plik /app/exercises.tsx linijka 50, może ty wykminisz
         </Text>
        </View>
    </View>
    </ScrollView>
    )
}