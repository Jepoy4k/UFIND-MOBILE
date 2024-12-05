import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install `expo/vector-icons`

const Header = () => {
  return (
    <View className="flex-row justify-between items-center bg-blue-50 px-4 py-2">
      {/* Hamburger Menu */}
      <TouchableOpacity>
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>

      {/* Profile Image */}
      <Image
        source={{ uri: "https://example.com/user-profile.png" }} // Replace with the actual image URL
        className="w-8 h-8 rounded-full"
      />
    </View>
  );
};

export default Header;
