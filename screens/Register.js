import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  secureTextEntry,
  ImageBackground,
  Image,
} from "react-native";
import Buttons from "../components/Buttons";
import InputFields from "../components/InputFields";
import { useDispatch } from "react-redux";
import { register } from "../features/User";

const bgimg = require("../assets/bgimg1.png");
const mylogo = require("../assets/SYNEMA LOGO.png");

function Register({ navigation }) {
  const dispatch = useDispatch();

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorText, setErrText] = useState("");
  const [isError, setisError] = useState(false);
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = () => {
    if (
      userName === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setErrText("Please Provide an Input");
      setisError(true);
    } else if (userName === "" || email === "") {
      setErrText("Please input your Username or Email");
      setisError(true);
    } else if (password === "" || confirmPassword === "") {
      setErrText("Please input your Password");
      setisError(true);
    } else if (password !== confirmPassword) {
      setErrText("Password Does not match");
      setisError(true);
    } else if (!password.match(passwordRegex)) {
      setErrText("Weak Password");
      setisError(true);
    } else if (!email.match(emailRegex)) {
      setErrText("Invalid email");
      setisError(true);
    } else if (
      userName !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrText("");
      setisError(false);
      dispatch(register({ username: userName, email: email, password: password, isLoggedIn: false}));
      navigation.navigate("Login");
    }
  };

  return (
    <ImageBackground
      source={bgimg}
      className="flex-1 object-contain bg-no-repeat bg-scroll"
    >
      <View className="justify-center items-center pb-6 flex-1">
        <View className="mb-8">
          <Image
            source={mylogo}
            style={{ width: 150, height: 150, marginBottom: -50 }}
          ></Image>
        </View>
        <View className="mb-3">
          <Text className="text-2xl font-extrabold pb-2 text-white">
            Create Account
          </Text>
        </View>

        <View className="gap-y-5 w-[80%]">
          <View>
            <InputFields
              title="Username"
              label="Username"
              onchange={(e) => setUsername(e)}
              styles="text-white text-[18px] py-2"
            />
          </View>
          <View>
            <InputFields
              title="Email"
              label="Email"
              onchange={(e) => setEmail(e)}
              styles="text-white text-[18px] py-2"
            />
          </View>
          <View>
            <InputFields
              hidden={true}
              title="Password"
              label="Password"
              onchange={(e) => setPassword(e)}
              styles="text-white text-[18px] py-2"
            />
          </View>
          <View>
            <InputFields
              hidden={true}
              title="Confirm Password"
              label="Confirm Password"
              onchange={(e) => setConfirmPassword(e)}
              styles="text-white text-[18px] py-2"
            />
          </View>
        </View>

        <View className="w-[80%] mt-4">
          {isError && (
            <Text className="text-center text-md pb-3 text-red-600 font-medium">
              {errorText}
            </Text>
          )}
          {/* // <Text className="text-center text-md pb-3 text-red-600 font-medium">Error</Text> */}
          <Buttons
            style="w-[100%] bg-red-700 text-center text-white py-2 text-xl rounded-lg"
            title="Create"
            clicker={handleSubmit}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Register;
