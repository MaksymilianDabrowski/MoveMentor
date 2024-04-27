import { View, Text } from 'react-native';
import React from 'react';
// import Carousel, { ParallaxImage, AdditionalParallaxProps } from 'react-native-snap-carousel';
import { sliderImages } from '@/constants';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface RenderItemProps {
    item: any;
    index: number;
    parallaxProps?: AdditionalParallaxProps;
}

export default function ImageSlider() {
    const renderItem = ({ item, index, parallaxProps }: RenderItemProps) => {
        return (
            <View style={{ width: wp(100) - 70, height: hp(25) }}>
                <ParallaxImage
                    source={item}
                    containerStyle={{ borderRadius: 30, flex: 1 }}
                    style={{ resizeMode: "contain" }}
                    parallaxFactor={1}
                    {...parallaxProps}
                />
            </View>
        );
    };

    return (
//         <Carousel
//             data={sliderImages}
//             loop={true}
//             autoplay={true}
//             // 34 wyrzuca błąd nwm dlaczego, funkcja przebudowana od 0
//             renderItem={renderItem}
//             hasParallaxImages={true}
//             sliderWidth={wp(100)}
//             firstItem={1}
//             autoplayInterval={4000}
//             itemWidth={wp(100) - 70}
//             slideStyle={{ display: "flex", alignItems: "center" }}
//         />
    <Text>KARUZELA</Text>
    );
}
