import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import store from "./src/services/store";
import ProductsScreen from "./src/pages/product";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <SafeAreaView style={app.areaView}>
            <ProductsScreen />
          </SafeAreaView>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const app = StyleSheet.create({
  areaView: {
    backgroundColor: "#f8f8f8",
  },
});
