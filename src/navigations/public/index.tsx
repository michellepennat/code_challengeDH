import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../pages/public/login";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
