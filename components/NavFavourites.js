import React from 'react'
import { TouchableOpacity, Button } from 'react-native'
import { FlatList } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const data = [
    {
        id: "1",
        icon: "home",
        location: "Home",
        destination: "Woodhill Drive, Pretoria",
    },
    {
        id: "2",
        icon: "briefcase",
        location: "Work",
        destination: "route 21 office park",
    },
]

const NavFavourites = () => {

    return <FlatList data={data} 
         keyExtractor={(item) => item.id} 
         ItemSeparatorComponent={() => (
             <View 
                style={[tw`bg-gray-200`, {height: 0.5}]} 
            />
         )}
         renderItem={({item}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon 
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={item.icon}
                type="ionicon"
                color="white"
                size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}  >{item.location}</Text>
                <Text  style={tw`text-gray-500`}>{item.destination}</Text>
            </View>
            <Button
                title="Login"
                onPress={() => Alert.alert('Left button pressed')}
                />
        </TouchableOpacity>
    ) } 
    />
}

export default NavFavourites

const styles = StyleSheet.create({})
