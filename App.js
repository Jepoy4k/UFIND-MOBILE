import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import LandingPage from "./screens/LandingPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaymentInfo from "./screens/PaymentInfo";
import PaymentConfirmation from "./screens/PaymentConfirmation";
import HomePage from "./screens/HomePage";
import Personal from "./screens/Personal";
import CinemaPage from "./screens/CinemaPage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User";
import cinemasReducer from "./features/Cinemas";
import moviesReducer from "./features/Movies";
import MoviePage from "./screens/MoviePage";
import BookTicketPage from "./screens/BookTicketPage";
import PaymentSuccessful from "./screens/PaymentSuccesful";
import MoviePage2 from "./screens/MoviePage2";
import MoviePage3 from "./screens/MoviePage3";
import BookTicketPage2 from "./screens/BookTicketPage2";
import BookTicketPage3 from "./screens/BookTicketPage3";

const store = configureStore({
  reducer: {
    user: userReducer,
    cinema: cinemasReducer,
    movies: moviesReducer,
  },
});
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View className="flex-1 bg-gray-800">
          <Stack.Navigator>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="MoviePage2" component={MoviePage2} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CinemaPage" component={CinemaPage} />
            <Stack.Screen name="Personal" component={Personal} />
            <Stack.Screen
              name="PaymentConfirmation"
              component={PaymentConfirmation}
            />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen name="PaymentInformation" component={PaymentInfo} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MoviePage" component={MoviePage} />
            <Stack.Screen name="BookTicketPage" component={BookTicketPage} />
            <Stack.Screen
              name="PaymentSuccessful"
              component={PaymentSuccessful}
            />
            <Stack.Screen name="MoviePage3" component={MoviePage3} />
            <Stack.Screen name="BookTicketPage2" component={BookTicketPage2} />
            <Stack.Screen name="BookTicketPage3" component={BookTicketPage3} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
