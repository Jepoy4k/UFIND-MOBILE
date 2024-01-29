import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Cards from "../components/Cards";
import { useSelector } from "react-redux";

const rain = require("../assets/rain.jpg");
const aqua = require("../assets/aquaman.jpg");
const openheimer = require("../assets/openheimer.jpg");

function CinemaPage({ navigation }) {

  const mall = useSelector((state) => state.cinema.value);
  const text = mall.map(items => {
    if(items.isCheked === true){
      return items.mall
    }
  })


  return (
    <ScrollView>
      <View className="container flex-row justify-between items-center  bg-[#800000] p-10 rounded-b-[50px]">
        <Text className="text-white font-bold text-[15px] ml-[55px] ">
          {text}
        </Text>

        <View className="rounded-full border-2 border-white w-[30px] h-[30px] " />
      </View>
      <View className="p-5 mt-5">
        <Text className="font-bold text-2xl">Now Showing</Text>
      </View>
      <View>
        <View className="rounded-xl overflow-hidden shadow-black p-5">
          <TouchableOpacity onPress={() => navigation.navigate("MoviePage")}>
            <ImageBackground
              className="object-cover rounded-3xl h-32 w-full overflow-hidden flex justify-center items-center"
              source={rain}
            >
              <Text className="text-white text-center text-xl font-bold">
                The Rain
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View className="rounded-xl overflow-hidden shadow-black p-5 py-0">
          <TouchableOpacity onPress={() => navigation.navigate("MoviePage")}>
            <ImageBackground
              className="object-cover rounded-3xl h-32 w-full overflow-hidden flex justify-center items-center"
              source={aqua}
            >
              <Text className="text-white text-center text-xl font-bold">
                Aquaman and The Lost Kingdom
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        <View className="rounded-xl overflow-hidden shadow-black p-5">
          <TouchableOpacity onPress={() => navigation.navigate("MoviePage")}>
            <ImageBackground
              className="object-cover rounded-3xl h-32 w-full overflow-hidden flex justify-center items-center"
              source={openheimer}
            >
              <Text className="text-white text-center text-xl font-bold">
                Openheimer
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CinemaPage;
