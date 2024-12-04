import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Register() {
  return (
    <View className="flex-1 bg-blue-900 items-center justify-center">
      <View className="bg-white w-4/5 rounded-2xl shadow-lg">
        {/* Gradient Header */}
        <View className="h-6 rounded-t-2xl bg-gradient-to-r from-blue-500 to-blue-700"></View>

        {/* Form Fields */}
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          {/* Student ID */}
          <Text className="text-lg font-bold text-gray-800 mb-2">
            Student ID
          </Text>
          <TextInput
            placeholder="Enter Student ID"
            value="2018992737"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* First Name */}
          <Text className="text-lg font-bold text-gray-800 mb-2">
            First Name
          </Text>
          <TextInput
            placeholder="Enter First Name"
            value="Jared"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* Last Name */}
          <Text className="text-lg font-bold text-gray-800 mb-2">
            Last Name
          </Text>
          <TextInput
            placeholder="Enter Last Name"
            value="Rara"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* Email Address */}
          <Text className="text-lg font-bold text-gray-800 mb-2">
            E-mail Address
          </Text>
          <TextInput
            placeholder="Enter E-mail"
            value="Jaredgwapo@gmail.com"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* Contact Number */}
          <Text className="text-lg font-bold text-gray-800 mb-2">
            Contact Number
          </Text>
          <TextInput
            placeholder="Enter Contact Number"
            value="09228747741"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* Password */}
          <Text className="text-lg font-bold text-gray-800 mb-2">Password</Text>
          <TextInput
            placeholder="Enter Password"
            secureTextEntry
            value="QWERTY123"
            className="bg-blue-100 rounded-md px-3 py-2 mb-4 text-gray-800"
          />

          {/* Sign-Up Button */}
          <TouchableOpacity className="bg-blue-600 py-3 rounded-full items-center mt-4">
            <Text className="text-white text-lg font-bold">SIGN UP</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
