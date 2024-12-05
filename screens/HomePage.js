import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomePage = () => {
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

      {/* Main Content */}
      <ScrollView className="flex-1">
        {/* Hero Section */}
        <View className="bg-white p-6">
          <Image
            source={{ uri: "https://example.com/hero-image.png" }} // Replace with actual image URL
            className="w-full h-64"
            resizeMode="contain"
          />
          <Text className="text-lg font-bold text-center mt-4">
            U-Find is a web and mobile platform for reporting, tracking, and
            retrieving lost and found items on campus.
          </Text>
        </View>

        {/* Browse Items Section */}
        <View className="bg-gray-100 py-6">
          <Text className="text-xl font-bold text-center mb-4">
            Browse Items
          </Text>
          <View className="flex-row justify-around">
            <View className="items-center">
              <Image
                source={{ uri: "https://example.com/item1.png" }} // Replace with item images
                className="w-20 h-20 rounded-lg"
              />
              <Text className="mt-2 text-sm">Necklace</Text>
            </View>
            <View className="items-center">
              <Image
                source={{ uri: "https://example.com/item2.png" }} // Replace with item images
                className="w-20 h-20 rounded-lg"
              />
              <Text className="mt-2 text-sm">School ID</Text>
            </View>
            <View className="items-center">
              <Image
                source={{ uri: "https://example.com/item3.png" }} // Replace with item images
                className="w-20 h-20 rounded-lg"
              />
              <Text className="mt-2 text-sm">Books</Text>
            </View>
          </View>
          <TouchableOpacity className="mt-6 bg-blue-500 rounded-full mx-auto px-6 py-2">
            <Text className="text-white text-center">View More</Text>
          </TouchableOpacity>
        </View>

        {/* Features Section */}
        <View className="bg-white py-6">
          <Text className="text-xl font-bold text-center mb-4">
            Why Choose Us?
          </Text>
          <View className="flex-row justify-evenly">
            {[...Array(3)].map((_, index) => (
              <View key={index} className="items-center">
                <Ionicons name="planet" size={40} color="blue" />
                <Text className="text-center mt-2 text-sm">Easy to Use</Text>
              </View>
            ))}
          </View>
        </View>

        {/* QR Section */}
        <View className="bg-gray-100 py-6 flex-row justify-between items-center px-6">
          <Text className="text-lg font-bold">Try it on our website</Text>
          <Ionicons name="arrow-forward" size={28} color="black" />
          <Image
            source={{ uri: "https://example.com/qr-code.png" }} // Replace with actual QR code
            className="w-20 h-20"
          />
        </View>

        {/* Client Feedback Section */}
        <View className="bg-blue-500 py-6">
          <Text className="text-xl font-bold text-center text-white mb-4">
            Client Feedbacks
          </Text>
          <View className="flex-row justify-evenly">
            <View className="bg-white p-4 rounded-lg w-40">
              <Text className="text-sm font-bold">Jason Stark</Text>
              <Text className="text-xs mt-2">
                Amazing platform! Highly recommend.
              </Text>
            </View>
            <View className="bg-white p-4 rounded-lg w-40">
              <Text className="text-sm font-bold">Rowena Tan</Text>
              <Text className="text-xs mt-2">
                Easy to use and very helpful!
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
