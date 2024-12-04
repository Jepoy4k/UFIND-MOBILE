import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 bg-blue-900 items-center justify-center">
      <View className="bg-white w-4/5 rounded-2xl shadow-lg">
        {/* Gradient Effect (Optional, could be handled using a library like react-native-linear-gradient) */}
        <View className="h-6 rounded-t-2xl bg-gradient-to-r from-blue-500 to-blue-700"></View>

        <View className="px-6 py-8">
          {/* Username Field */}
          <Text className="text-lg font-bold text-gray-800 mb-2">Username</Text>
          <View className="bg-blue-100 flex-row items-center rounded-md px-3 mb-4">
            <Text className="text-xl">👤</Text>
            <TextInput
              placeholder="Enter username"
              value="Jared Rara"
              className="text-base text-gray-800 flex-1 ml-3 py-2"
            />
          </View>

          {/* Password Field */}
          <Text className="text-lg font-bold text-gray-800 mb-2">Password</Text>
          <View className="bg-blue-100 flex-row items-center rounded-md px-3 mb-6">
            <Text className="text-xl">🔒</Text>
            <TextInput
              placeholder="Enter password"
              secureTextEntry
              value="******"
              className="text-base text-gray-800 flex-1 ml-3 py-2"
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity className="bg-blue-600 py-3 rounded-full items-center">
            <Text className="text-white text-lg font-bold">LOGIN</Text>
          </TouchableOpacity>

          {/* Register Text */}
          <View className="flex-row justify-center mt-4">
            <Text className="text-gray-500">Don't have an account?</Text>
            <TouchableOpacity>
              <Text className="text-blue-500 font-bold ml-2">Register Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
