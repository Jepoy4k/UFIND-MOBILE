import React from "react";
import { ScrollView, View, ImageBackground, Text } from "react-native";
import Buttons from "../components/Buttons";

const img = require("../assets/openheimermovie.webp");

function MoviePage3({ navigation }) {
  return (
    <ScrollView className="bg-[#800000]">
      <ImageBackground className="object-cover h-[350px] w-full " source={img}>
        <View className="flex-1 justify-end">
          <Text className="px-5 text-white text-3xl font-bold">Openheimer</Text>
          <Text className="px-5 py-3  text-white text-[15px]">
            2023 / PG-18 / 3h {"\n"}Thrilling • Documentary • History
          </Text>
        </View>
      </ImageBackground>
      <View className="p-5 mt-5">
        <Text className="text-white text-justify">
          During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J.
          Robert Oppenheimer to work on the top-secret Manhattan Project.
          Oppenheimer and a team of scientists spend years developing and
          designing the atomic bomb. Their work comes to fruition on July 16,
          1945, as they witness the world's first nuclear explosion, forever
          changing the course of history.
        </Text>
      </View>
      <View className="p-5">
        <Text className="text-white text-xl ">Film Sypnosis</Text>
        <Text className="text-white my-3 text-justify">
          The story of American scientist, J. Robert Oppenheimer, and his role
          in the development of the atomic bomb.
        </Text>
        <Buttons
          style="bg-black text-center text-white py-3 px-5 text-[15px] rounded-[10px] mt-5"
          title="Book a ticket | ₱230"
          clicker={() => navigation.navigate("BookTicketPage3")}
        />
      </View>
    </ScrollView>
  );
}

export default MoviePage3;
