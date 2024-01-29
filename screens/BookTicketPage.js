import React, { useState } from "react";
import { ScrollView, View, ImageBackground, Text } from "react-native";
import InputFields from "../components/InputFields";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { Dropdown } from "react-native-element-dropdown";
import { FontAwesome5 } from "@expo/vector-icons";
import Dropdown from "react-native-picker-select";
import Buttons from "../components/Buttons";

const img = require("../assets/AquaTicket.png");

function BookTicketPage({ navigation }) {
  const dateOptions = [
    { label: "January 28, 2024", value: "January 28, 2024" },
    { label: "January 29, 2024", value: "January 29, 2024" },
    { label: "January 30, 2024", value: "January 30, 2024" },
    { label: "January 31, 2024", value: "January 31, 2024" },
  ];

  const timeOptions = [
    { label: "11:15 AM", value: "11:15 AM" },
    { label: "1:30 PM", value: "1:30 PM" },
    { label: "3:30 PM", value: "3:30 PM" },
    { label: "6:30 PM", value: "6:30 PM" },
  ];

  const [selectedValueDate, setSelectedValueDate] = useState(null);
  const [selectedValueTime, setSelectedValueTime] = useState(null);

  const placeholderdate = {
    label: "Select date",
    value: null,
  };
  const placeholdertime = {
    label: "Select time",
    value: null,
  };

  return (
    <ScrollView>
      <ImageBackground
        source={img}
        className="w-full h-[420px] object-cover overflow-hidden mb-[700px]"
      ></ImageBackground>
      <View className="w-full h-[850px] bg-[#800000] rounded-t-[60px] absolute bottom-0">
        <View className="p-5">
          <Text className="text-white text-2xl mt-[50px]">
            Fill up Information
          </Text>
        </View>
        <View className="px-5">
          <Text className="pt-[20px] text-white">Full Name</Text>
          <InputFields className=""></InputFields>
        </View>
        <View className="px-5">
          <Text className="pt-[20px] text-white">Email Address</Text>
          <InputFields className=""></InputFields>
        </View>
        <View className="px-5">
          <Text className="pt-[20px] text-white">Address</Text>
          <InputFields className=""></InputFields>
        </View>
        <View className="px-5">
          <Text className="pt-[20px] text-white">Contact Number</Text>
          <InputFields className=""></InputFields>
        </View>
        <View className="items-center p-5">
          <View className="w-[300px] ">
            <Dropdown
              placeholder={placeholderdate}
              items={dateOptions}
              onValueChange={(value) => setSelectedValueDate(value)}
              value={selectedValueDate}
            />
            {selectedValueDate && (
              <Text className="text-white px-4">Date: {selectedValueDate}</Text>
            )}
          </View>
          <View className="w-[300px] py-5">
            <Dropdown
              placeholder={placeholdertime}
              items={timeOptions}
              onValueChange={(value) => setSelectedValueTime(value)}
              value={selectedValueTime}
            />
            {selectedValueTime && (
              <Text className="text-white px-4">Time: {selectedValueTime}</Text>
            )}
          </View>
        </View>
      </View>
      <View className="p-5">
        <Buttons
          style="bg-black text-center text-white py-3 px-5 text-[15px] rounded-[10px] mt-5"
          title="Next"
          clicker={() => navigation.navigate("PaymentInformation")}
        />
      </View>
    </ScrollView>
  );
}

export default BookTicketPage;
