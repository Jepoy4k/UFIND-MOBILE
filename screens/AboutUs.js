import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AboutUs = () => {
  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center bg-blue-50 px-4 py-3">
        <TouchableOpacity>
          <Ionicons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: "https://example.com/user-profile.png" }} // Replace with actual profile picture
          className="w-10 h-10 rounded-full"
        />
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4 py-6">
        {/* Image Section */}
        <Image
          source={{ uri: "https://example.com/about-image.jpg" }} // Replace with actual image URL
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />

        {/* About Us Text */}
        <View className="mt-6">
          <Text className="text-2xl font-bold text-center mb-4">ABOUT US</Text>
          <Text className="text-base text-justify text-gray-700 leading-relaxed">
            U-Find is a user-friendly web and mobile platform designed to help
            students and staff report, track, and retrieve lost and found items
            on campus. Our system allows users to securely log in and report any
            lost or found items, making it easier for the rightful owners to be
            reunited with their belongings. With real-time notifications, users
            are quickly alerted whenever a match for their lost or found item is
            made.
          </Text>
          <Text className="text-base text-justify text-gray-700 leading-relaxed mt-4">
            Administrators can efficiently manage reports, ensuring that all
            cases are handled smoothly. Our goal is to create a seamless and
            convenient experience for the campus community, helping lost items
            find their way back to their owners in a secure and timely manner.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutUs;
