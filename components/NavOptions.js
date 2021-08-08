import React from 'react'
import { FlatList, TouchableOpacity, View, Image , Text} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';

const data = [

{
    id: "1",
    title: "Get a Ride",
    image: "https://i.dlpng.com/static/png/6453338_preview.png",
    screen: "MapScreen"
},
{
    id: "2",
    title: "Order Food",
    image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
    screen: "EatScreen"
},
];

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

    return (
        <FlatList 
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                disabled={!origin}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image 
                            style={{ width: 120, height: 120, resizeMode: "contain" }}
                            source={{ uri: item.image }}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`} >{item.title}</Text>
                        <Icon 
                            type='antdesign' 
                            color='white' 
                            name="arrowright"
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        />
                    </View>
                </TouchableOpacity>



            )}
        
        
        />
    )
}

export default NavOptions