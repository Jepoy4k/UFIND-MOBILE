import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

function Cards({image, press}) {
  return (
    <View>
        <View className="shadow-black rounded-xl">
          <TouchableOpacity onPress={press}>
            <Image className="object-cover rounded-xl h-32 w-[100%]" source={image}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}

export default Cards;