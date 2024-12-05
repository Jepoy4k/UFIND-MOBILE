import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

const ContactUs= () => {
  return (
    <View className="flex-1 bg-white">
      <View className="bg-blue-500 py-6 px-4">
        <Text className="text-white text-2xl font-bold">Contact Us</Text>
      </View>
      <View className="flex-1 px-4 py-8">
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">E-mail Address:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mt-1"
            placeholder="support@findid.com"
            editable={false}
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Phone:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mt-1"
            placeholder="(123) 456-7890"
            editable={false}
          />
        </View>
        <View className="mb-6">
          <Text className="text-gray-700 font-medium">Office Hours:</Text>
          <Text className="text-gray-600">
            Monday - Friday, 9:00 AM - 5:00 PM
          </Text>
        </View>
        <View>
          <Text className="text-gray-700 font-medium">Get in Touch:</Text>
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            placeholder="Name"
          />
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            placeholder="Email Address"
          />
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-4"
            placeholder="Subject"
          />
          <TextInput
            className="border border-gray-300 rounded-md px-3 py-2 mb-6"
            placeholder="Message"
            multiline={true}
            numberOfLines={4}
          />
          <TouchableOpacity className="bg-blue-500 rounded-md px-4 py-2">
            <Text className="text-white font-medium">SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ContactUs;
