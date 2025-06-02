import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'

const Profile = () => {
    return (
        <View className="flex-1 bg-primary">
            <Image
                source={images.bg}
                className="flex-1 absolute w-full z-0"
                resizeMode="cover"
            />
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

            <View className='flex-1 justify-center items-center mt-2'>
                <Text className="text-white text-2xl">Not impleted yet!</Text>
            </View>

        </View>
    )
}

export default Profile