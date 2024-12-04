import React from "react";
import { View, Text, Image } from "react-native";

export default function LandingPage1() {
  return (
    <View className="flex-1 bg-blue-900 items-center justify-center">
      {/* Logo */}
      <View className="mb-6">
        {/* Replace with your logo image */}
        <Image
          source={require("./path-to-your-logo.png")} // Replace with your logo's path
          style={{ width: 150, height: 150 }} // Adjust the size as per your logo
        />
      </View>

      {/* Title */}
      <Text className="text-white text-2xl font-bold">U-FIND</Text>
    </View>
  );
}
