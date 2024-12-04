import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
export default function LandingPage2() {
  return (
    <View className="flex-1 bg-gray-900 justify-center items-center">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* First Screen */}
        <View className="flex-1 w-screen justify-center items-center bg-white mx-2 p-4">
          <Image
            source={require("../assets/message-icon.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text className="text-2xl font-bold mt-4">Messaging</Text>
          <Text className="text-gray-500 text-center mt-2">
            Lost app allows for interactions between users.
          </Text>
        </View>

        {/* Second Screen */}
        <View className="flex-1 w-screen justify-center items-center bg-white mx-2 p-4">
          <Image
            source={require("../assets/report-icon.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text className="text-2xl font-bold mt-4">
            Report found or lost items
          </Text>
          <Text className="text-gray-500 text-center mt-2">
            An item lost or found can easily be reported or an ad could be
            created.
          </Text>
        </View>

        {/* Third Screen */}
        <View className="flex-1 w-screen justify-center items-center bg-white mx-2 p-4">
          <Image
            source={require("../assets/search-icon.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text className="text-2xl font-bold mt-4">Search Map</Text>
          <Text className="text-gray-500 text-center mt-2">
            Search for found items. Items lost or found close to your location
            will be shown on the map.
          </Text>
        </View>
      </ScrollView>

      {/* Skip Button */}
      <TouchableOpacity className="absolute bottom-5 right-5 p-3 bg-blue-600 rounded-full">
        <Text className="text-white">Skip</Text>
      </TouchableOpacity>
    </View>
  );
}