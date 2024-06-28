import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInUp, FadeOut } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


export default function SignUp() {
    const navigationpage = useNavigation();
    return (
        <View className='bg-white h-full w-full  pt-10'>
            <StatusBar style='dark' />
            <Image className='h-full w-full absolute' source={require('../Assets/Images/backgroundgreend.png')} />
            <View className='flex flex-row justify-around w-full h-full absolute'>
                <Animated.Image entering={FadeInUp.delay(200).duration(1000).springify().damping(3)} className='h-[225] w-[90]' source={require('../Assets/Images/light.png')} />
                <Animated.Image entering={FadeInUp.delay(400).duration(1000).springify().damping(3)} className='h-[160] w-[65]' source={require('../Assets/Images/light.png')} />
            </View>
            <View className='h-full w-full justify-around pt-40 pb-10'>
                <View className='flex items-center'>
                    <Animated.Text entering={FadeInUp.duration(1000).springify()} className='text-white font-bold tracking-wider text-5xl'>Sign Up</Animated.Text>
                </View>
                <View className='flex items-center mx-4 space-y-4'>
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className='bg-gray-200 p-5 rounded-2xl w-full'>
                        <TextInput placeholder='Full Name' placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className='bg-gray-200 p-5 rounded-2xl w-full'>
                        <TextInput placeholder='Email' placeholderTextColor={'gray'} />
                    </Animated.View>
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className='bg-gray-200 p-5 rounded-2xl w-full mb-3'>
                        <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry />
                    </Animated.View>
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className='w-full'>
                        <TouchableOpacity className='w-full bg-[#00b03a] p-3 rounded-2xl mb-3 '>
                            <Text className='text-xl font-bold text-black text-center'>Sign Up</Text>
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View entering={FadeInUp.duration(1000).springify()} className='flex flex-row justify-center'>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => navigationpage.push('Login')}>
                            <Text className='text-[#00b03a] font-bold'>Login</Text>
                        </TouchableOpacity>

                    </Animated.View>
                </View>
            </View>
        </View>
    )
}