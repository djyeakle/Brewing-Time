import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MyTeapotScreen from "./screens/MyTeapotScreen";
import BrewNowScreen from "./screens/BrewNowScreen";
import BlackTeaScreen from "./screens/BlackTeaScreen";
import GreenTeaScreen from "./screens/GreenTeaScreen";
import HerbalTeaScreen from "./screens/HerbalTeaScreen";
import BlackTimerScreen from "./screens/BlackTimerScreen";
import GreenTimerScreen from "./screens/GreenTimerScreen";
import HerbalTimerScreen from "./screens/HerbalTimerScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="My Teapot" component={MyTeapotScreen} />
        <Stack.Screen name="Brew Now" component={BrewNowScreen} />
        <Stack.Screen name="Black Tea" component={BlackTeaScreen} />
        <Stack.Screen name="Green Tea" component={GreenTeaScreen} />
        <Stack.Screen name="Herbal Tea" component={HerbalTeaScreen} />
        <Stack.Screen name="Black Timer" component={BlackTimerScreen} />
        <Stack.Screen name="Green Timer" component={GreenTimerScreen} />
        <Stack.Screen name="Herbal Timer" component={HerbalTimerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
