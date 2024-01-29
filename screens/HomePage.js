import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Cards from "../components/Cards";
import { checked } from "../features/Cinemas";
import { useDispatch, useSelector } from "react-redux";



function HomePage({ navigation }) {
  const user = useSelector((state) => state.user.value);
  const cinema = useSelector((state) => state.cinema.value);
  const movies = useSelector((state) => state.movies.value);

  const dispatch = useDispatch();

  const text = user.map((users) => {
    if (users.isLoggedIn === true) {
    return users.username;
    }
  })

  const handleMovies = (malls, index) => {
    dispatch(checked({mall: malls, isCheked: true}))
    navigation.navigate("CinemaPage")
  }
 
  return (
    <ScrollView>
      <View className="container flex justify-center items-center bg-[#800000] p-10 gap-y-1 rounded-b-[50px]">
        <View className="rounded-full border-2 border-white w-[120px] h-[120px]">
          <Text className="text-center self-center m-auto font-bold text-white">
            Image
          </Text>
        </View>
        <View className="gap-y-5 justify-center items-center">
          <Text className="text-white text-xl font-bold">{text}</Text>
          <TouchableOpacity className="bg-white rounded-full">
            <Text
              className="py-3 px-6 font-semibold"
              onPress={() => navigation.navigate("Personal")}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className=" pt-12 justify-center items-center pb-3">
        <Text className="text-2xl font-semibold">Available Cinema</Text>
        <View className="mt-3 w-[80%]">
          {cinema.map((cine, index) => {
            return (
              <View key={index}>
                <Text className="text-left pl-2 text-lg mt-3">{cine.mall}</Text>
                <Cards press={() => handleMovies(cine.mall, index)} image={cine.src} />
              </View>
              )
          })}
        </View>
      </View>
    </ScrollView>
  );
}

export default HomePage;
