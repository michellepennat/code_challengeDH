import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./src/services/store";
import ProductsScreen from "./src/pages/product";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <ProductsScreen />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

{
  /* <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <ProductsScreen />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider> */
}
