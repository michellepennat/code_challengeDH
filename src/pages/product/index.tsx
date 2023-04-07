import { Spinner, Text } from "native-base";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "./components/footer";
import Header from "./components/header";
import PointBox from "./components/point-box";
import ProductList from "./components/product-list";
import useProduct from "./hooks/use-product";

interface IProductScreen {
  navigation: any;
}

const ProductsScreen = ({ navigation }: IProductScreen) => {
  const { products, total, setFilter, filter, loading, selectProduct } =
    useProduct({ navigation: navigation });
  return (
    <SafeAreaView style={ProductsStyle.wrapper}>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Header />
          <Text style={ProductsStyle.subtitle}>Tus puntos</Text>
          <PointBox total={total} />
          <Text style={ProductsStyle.subtitle}>Tus movimientos</Text>
          <ProductList selectProduct={selectProduct} products={products} />
          <Footer actualFilter={filter} setFilter={setFilter} />
        </>
      )}
    </SafeAreaView>
  );
};

const ProductsStyle = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "#F8F8F8",
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19,
    color: "#9B9898",
    marginVertical: 20,
  },
});

export default ProductsScreen;
