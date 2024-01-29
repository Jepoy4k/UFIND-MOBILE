import React from 'react'
import { Text, View, Image } from 'react-native'
import Buttons from '../components/Buttons'
import InputFields from '../components/InputFields'
const gcash = require("../assets/GCASHLOGO.png");
function PaymentInfo({navigation}) {
  return (
    <View className="flex-1 justify-center gap-y-20">
        <View className="gap-y-10 w-[90%] self-center">
            <Text className="text-[#1B2C49] font-semibold text-lg">Payment Method</Text>
            <Image source={gcash} style={{width:250, marginLeft:35}}/>
            <InputFields title="Ex. 097512332145" label="Enter Phone Number" styles="text-black text-[15px] py-2" styles2="border-2"/>
        </View>
        <View className="w-[90%] self-center">
            <Buttons clicker={() => navigation.navigate("PaymentConfirmation")} title="Next" style="w-[100%] bg-red-600 text-center py-2 text-lg rounded-md text-white"/>
        </View>
    </View>
  )
}

export default PaymentInfo