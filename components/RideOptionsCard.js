import React , { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View , Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlices';

const data = [
    {
        id:"Uber-X-1",
        title:"UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
    },
    {
        id:"Uber-XL-2",
        title:"Uber XL",
        multiplier: 1.1,
        image: "https://links.papareact.com/7pf"
    },
    {
        id:"Uber-Lux-3",
        title:"Uber LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },
];

const SURGE_CHARGE_RATE = 1.5;



const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <SafeAreaView style={tw`bg-white flex-grow -mt-2`}>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate("NavigateCard")}
                style={tw`absolute left-5 z-50 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                 <Text style={tw`text-center text-xl`} >Select a Ride - {travelTimeInformation?.distance.text}</Text>
            </View>  
            <FlatList data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item: {id, title, multiplier, image}, item})=> (
                    <TouchableOpacity 
                    onPress={() => setSelected(item)}
                    style={tw`flex-row justify-between items-center px-8
                    ${id === selected?.id && "bg-gray-200"}`}>
                        <Image  
                        style={{width: 80, height: 80, resizeMode: "contain"}}
                        source={{uri: image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-za', {
                                style: 'currency',
                                currency: 'ZAR'
                            }).format(
                                travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier / 10
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-2 m-3 ${!selected && 'bg-gray-300'}`} >
                    <Text style={tw`text-center text-white text-xl`} >
                         Choose {selected?.title}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
