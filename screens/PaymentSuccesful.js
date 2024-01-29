import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
const mylogo = require("../assets/SYNEMA LOGO.png");
const check = require("../assets/GreenCheck.png");
import Button from "../components/Buttons";

const PaymentSuccessful = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#800000",
        alignItems: "center",
        padding: 50,
      }}
    >
      <View>
        <Image
          source={mylogo}
          style={{ width: 250, height: 250, marginBottom: -10, marginTop: -50 }}
        ></Image>
      </View>
      <View>
        <Image
          source={check}
          style={{ width: 100, height: 100, marginBottom: 50 }}
        ></Image>
      </View>
      <Text style={{ color: "white", fontSize: 20, marginBottom: 40 }}>
        Payment Successful
      </Text>
      <Text style={{ color: "white", fontSize: 16, marginBottom: 70 }}>
        {" "}
        Check your email
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "white",
          fontSize: 12,
          marginBottom: 50,
          marginTop: -50,
        }}
      >
        Kindly check your email for notification of the successful payment.
      </Text>
      <TouchableOpacity
        className="bg-[#000000] p-2 px-[25px] rounded-lg"
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text className="text-white text-lg">Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessful;
