import { StatusBar } from "expo-status-bar";
import {View } from "react-native";
import LandingPage1 from "./screens/LandingPage1";
import LandingPage2 from "./screens/LandingPage2";

export default function App() {
  return (
    <View className="flex-1" >

      <LandingPage2 />
    </View>
  );
}


