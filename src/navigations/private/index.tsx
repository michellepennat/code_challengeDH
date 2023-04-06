import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/private/home";

const Stack = createNativeStackNavigator();

const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default PrivateNavigation;
