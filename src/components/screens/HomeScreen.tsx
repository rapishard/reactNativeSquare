import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'
import ScreenFC from '../models/ScreenFC'

const HomeScreen: ScreenFC<"Home"> = ({navigation, route}) =>{
  return (
    <SafeAreaView>
        <Text>Homepage</Text>
        <Button title="Go" 
        onPress={() => navigation.navigate("Settings")} />
    </SafeAreaView>
  )
}

export default HomeScreen