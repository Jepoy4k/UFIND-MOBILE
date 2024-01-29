import React from "react";
import { ScrollView, View, ImageBackground, Text } from "react-native";
import Buttons from "../components/Buttons";

const img = require("../assets/rainmovie.jpg");

function MoviePage2({ navigation }) {
  return (
    <ScrollView className="bg-[#800000]">
      <ImageBackground className="object-cover h-[350px] w-full " source={img}>
        <View className="flex-1 justify-end">
          <Text className="px-5 text-white text-3xl font-bold">The Rain</Text>
          <Text className="px-5 py-3  text-white text-[15px]">
            2018 / PG-13 / 2h 4m {"\n"}Thrilling • Adventure • Survival
          </Text>
        </View>
      </ImageBackground>
      <View className="p-5 mt-5">
        <Text className="text-white text-justify">
          The world as we know it has come to an end, due to a rain-carried
          virus that wiped out nearly everybody in Scandinavia. Six years after
          that event, two Danish siblings emerge from the safety of the bunker
          where they have been staying. After discovering all remnants of
          civilization gone, they join a group of fellow young survivors, and
          together they head out on a danger-filled quest throughout the
          abandoned land in search of signs of life. The survivors think they
          have been set free from societal rules of the past, but they quickly
          find that even in a post-apocalyptic world there is love, jealousy and
          other coming-of-age dilemmas that young people have always faced.
        </Text>
      </View>
      <View className="p-5">
        <Text className="text-white text-xl ">Film Sypnosis</Text>
        <Text className="text-white my-3 text-justify">
          After a brutal virus wipes out most of the population, two young
          siblings embark on a perilous search for safety.
        </Text>
        <Buttons
          style="bg-black text-center text-white py-3 px-5 text-[15px] rounded-[10px] mt-5"
          title="Book a ticket | ₱230"
          clicker={() => navigation.navigate("BookTicketPage2")}
        />
      </View>
    </ScrollView>
  );
}

export default MoviePage2;
