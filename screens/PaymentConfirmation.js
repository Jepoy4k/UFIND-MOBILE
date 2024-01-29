import React from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import Buttons from '../components/Buttons'
import InputFields from '../components/InputFields'

const gcash = require("../assets/GCASHLOGO.png");
function PaymentConfirmation({navigation}) {
  return (
    // <ScrollView>
    <View className="flex-1 justify-center gap-y-20">
        <View className="gap-y-10 w-[90%] self-center">
            <Text className="text-[#1B2C49] font-semibold text-lg">Payment Method</Text>
            {/* <Text className="self-center">Gcash Logo</Text> */}
            <Image source={gcash} style={{width:250, marginLeft:35}}/>
            <View className="border-t-[1px]">
                <View className="flex-row justify-between">
                    <Text className="pt-4 text-[#838383]">Payment Method</Text>
                    <Text className="pt-4 text-[#838383]">Gcash</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="pt-4 font-semibold text-[17px]">Total Amount</Text>
                    <Text className="pt-4 font-semibold text-[17px]">PHP 250.00</Text>
                </View>
            </View>
        </View>
        <View className="w-[90%] self-center">
            <Buttons clicker={() => navigation.navigate("PaymentSuccessful")} title="Confirm Payment" style="w-[100%] bg-red-600 text-center py-2 text-lg rounded-md text-white"/>
        </View>
    </View>
 
  )
}

export default PaymentConfirmation