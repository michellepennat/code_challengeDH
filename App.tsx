import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeBaseProvider } from "native-base";
import "react-native-gesture-handler";
import DetailProductScreen from "./src/pages/detail-product";
import ProductsScreen from "./src/pages/product";
import useStore from "./src/services/product/store";

const Stack = createStackNavigator();

export default function App() {
  const { products, dispatch, ProductsContext, ProductsDispatchContext } =
    useStore();
  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>
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
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}
