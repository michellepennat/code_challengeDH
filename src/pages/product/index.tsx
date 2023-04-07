import {
  Button,
  Box,
  FlatList,
  HStack,
  Spacer,
  StatusBar,
  Text,
  VStack,
  Image,
} from "native-base";
import useProduct from "./hooks/use-product";
import moment from "moment";
import { StyleSheet, View } from "react-native";
import { IProduct } from "../../services/product/interface";
import { Dimensions } from "react-native";
import Header from "./components/header";
import PointBox from "./components/point-box";
import ProductList from "./components/product-list";
import Footer from "./components/footer";

const screenHeight = Dimensions.get("window").height;
console.log(screenHeight - 374);

moment.locale("es");

const ProductsScreen = () => {
  const { products, total, setFilter,filter } = useProduct();
  return (
    <View style={ProductsStyle.wrapper}>
      <Header />
      <Text style={ProductsStyle.subtitle}>Tus puntos</Text>
      <PointBox total={total} />
      <Text style={ProductsStyle.subtitle}>Tus movimientos</Text>
      <ProductList products={products} />
      <Footer actualFilter={filter} setFilter={setFilter} />
    </View>
  );
};

const ProductsStyle = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 27,
    color: "#020202",
  },
  textUser: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.86,
    color: "#020202",
  },
  subtitle: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19,
    color: "#9B9898",
    marginVertical: 20,
  },
  card: {
    width: 286,
    height: 143,
  },
  month: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
    color: "#ffffff",
    marginBottom: 7,
  },
  totalPoints: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 32,
    lineHeight: 44,
    color: "#ffffff",
    marginBottom: 7,
    textAlign: "center",
  },
  listProducts: {
    height: screenHeight - 490,
    borderRadius: 10,
    paddingTop: 23,
    paddingStart: 10,
    paddingEnd: 7.56,
    paddingBottom: 20,
    marginBottom: 43,
  },
  product: {
    marginBottom: 8,
  },
  textProduct: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19,
    color: "#000000",
    marginBottom: 7,
  },
  date: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#000000",
  },
  points: {
    // fontFamily:'Avenir',
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
  },
  primaryButton: {
    // fontFamily:'Avenir',
    backgroundColor: "#334FFA",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    color: "#ffffff",
  },
});

export default ProductsScreen;
