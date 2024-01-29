import React from "react";
import { ScrollView, View, ImageBackground, Text } from "react-native";
import Buttons from "../components/Buttons";

const img = require("../assets/movieimg.png");

function MoviePage({ navigation }) {
  return (
    <ScrollView className="bg-[#800000]">
      <ImageBackground className="object-cover h-[350px] w-full " source={img}>
        <View className="flex-1 justify-end">
          <Text className="px-5 text-white text-3xl font-bold">
            Aquaman and The Lost Kingdom
          </Text>
          <Text className="px-5 py-3  text-white text-[15px]">
            2023 / PG-13 / 2h 4m {"\n"}Action • Adventure • Fantasy
          </Text>
        </View>
      </ImageBackground>
      <View className="p-5 mt-5">
        <Text className="text-white text-justify">
          Black Manta seeks revenge on Aquaman for his father's death. Wielding
          the Black Trident's power, he becomes a formidable foe. To defend
          Atlantis, Aquaman forges an alliance with his imprisoned brother. They
          must protect the kingdom.
        </Text>
      </View>
      <View className="p-5">
        <Text className="text-white text-xl ">Film Sypnosis</Text>
        <Text className="text-white my-3 text-justify">
          After failing to defeat Aquaman the first time, Black Manta wields the
          power of the mythic Black Trident to unleash an ancient and malevolent
          force. Hoping to end his reign of terror, Aquaman forges an unlikely
          alliance with his brother, Orm, the former king of Atlantis. Setting
          aside their differences, they join forces to protect their kingdom and
          save the world from irreversible destruction.
        </Text>
        <Buttons
          style="bg-black text-center text-white py-3 px-5 text-[15px] rounded-[10px] mt-5"
          title="Book a ticket | ₱250"
          clicker={() => navigation.navigate("BookTicketPage")}
        />
      </View>
    </ScrollView>
  );
}

export default MoviePage;
