import React from "react";
import { View, Text, Image } from "react-native";
import Find from "../assets/Find.png"; // Ensure this path is correct

export default function LandingPage1() {
  return (
    <View className="flex-1 bg-blue-900 items-center justify-center">
      {/* Logo */}
      <View className="mb-6">
        <Image
          source={Find} // Directly use the imported image
          style={{ width: 150, height: 150 }} // Adjust the size as per your logo
        />
      </View>

      {/* Title */}
      <Text className="text-white text-2xl font-bold">U-FIND</Text>
    </View>
  );
}
