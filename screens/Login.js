import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  secureTextEntry,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import Buttons from "../components/Buttons";
import InputFields from "../components/InputFields";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/User";

const bgimg = require("../assets/bgimg1.png");
const mylogo = require("../assets/SYNEMA LOGO.png");

function Login({ navigation }) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  loginHandler = () => {
   console.log(user)
    if (userName !== "" && password !== "") {
      setIsError(false)
      user.filter((users) => {
        if (users.username !== userName || users.password !== password) {
          setUsername("");
          setPassword("");
          setErrorMessage("Invalid username or password")
          setIsError(true)
        }
        else if (users.username === userName && users.password === password) {
          dispatch(
            login({username: userName, password: password, isLoggedIn: false,  email: users.email})
            );
            setPassword("");
            setUsername("");
            navigation.navigate("HomePage");
            setErrorMessage();
            setIsError(false);

        }
      });
      
    } 
    else{
      setUsername("");
      setPassword("");
      setErrorMessage("Please enter a username or password");
      setIsError(true);
  }
  };

  return (
    <ImageBackground
      source={bgimg}
      className="flex-1 object-contain bg-no-repeat bg-scroll"
    >
      <View className="justify-evenly items-center flex-1 gap-8">
        <View>
          <Image
            source={mylogo}
            style={{
              width: 250,
              height: 250,
              marginBottom: -200,
              marginTop: -80,
            }}
          ></Image>
        </View>
        <View className="gap-y-8 w-[80%]">
          <View>
            <InputFields
              title="Username"
              label="Username"
              styles="text-white text-[18px] py-2"
              onchange={(e) => setUsername(e)}
              value={userName}
            />
          </View>
          <View>
            <InputFields
              hidden={true}
              title="Password"
              label="Password"
              styles="text-white text-[18px] py-2"
              onchange={(e) => setPassword(e)}
              value={password}
            />
          </View>
          <TouchableOpacity className="self-end">
            <Buttons style="text-[15px] text-white" title="Forgot Password" />
          </TouchableOpacity>
          {isError && <Text className="text-red-500 text-center">{errMsg}</Text>}
        </View>

        <View className="w-[80%] h-[10%] justify-between">
          <Buttons
            style="text-white text-center"
            title="Don't Have an Account Yet? Sign up"
            clicker={() => navigation.navigate("Register")}
          />
          <Buttons
            style="bg-red-700 text-center text-white py-2 text-xl rounded-lg"
            title="Login"
            clicker={loginHandler}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

export default Login;
