import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import user from "./reducers/user";

import GalleryScreen from "./screens/GalleryScreen";
import HomeScreen from "./screens/HomeScreen";
import SnapScreen from "./screens/SnapScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const store = configureStore({
  reducer: { user },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "";

          if (route.name === "Snap") {
            iconName = "camera";
          } else if (route.name === "Gallery") {
            iconName = "image";
          }
          return <FontAwesome name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: "#e8be4b",
        tabBarInactiveTintColor: "#b2b2b2",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Snap" component={SnapScreen} />
      <Tab.Screen name="Gallery" component={GalleryScreen} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
