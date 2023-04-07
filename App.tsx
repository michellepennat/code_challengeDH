import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import DetailProductScreen from "./src/pages/detail-product";
import ProductsScreen from "./src/pages/product";
import store from "./src/services/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="products"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="products" component={ProductsScreen} />
            <Stack.Screen name="detail" component={DetailProductScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
