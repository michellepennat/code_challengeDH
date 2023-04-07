import moment from "moment";
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
import { Dimensions, StyleSheet } from "react-native";
import { IProduct } from "../../../services/product/interface";

const screenHeight = Dimensions.get("window").height;

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProductListProps) => (
  <FlatList
    style={ProductListStyle.listProducts}
    bg="#ffffff"
    data={products}
    renderItem={({ item }: { item: IProduct }) => (
      <Box style={ProductListStyle.product}>
        <HStack space={[2, 3]} justifyContent="space-between">
          <Image
            size="55px"
            borderRadius={10}
            ml="11"
            alt={item.product}
            source={{
              uri: item.image,
            }}
          />
          <VStack>
            <Text style={ProductListStyle.textProduct}>{item.product}</Text>
            <Text style={ProductListStyle.date}>
              {moment(item.createdAt).format("DD [de] MMMM, YYYY")}
            </Text>
          </VStack>
          <Spacer />
          <HStack>
            <Text
              style={ProductListStyle.points}
              color={item.is_redemption ? "#FF0000" : "#00B833"}
            >
              {item.is_redemption ? "-" : "+"}
            </Text>
            <Text color="#000" style={ProductListStyle.points}>
              {item.points}
            </Text>
          </HStack>
        </HStack>
      </Box>
    )}
    keyExtractor={(item) => item.id}
  />
);

const ProductListStyle = StyleSheet.create({
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
});

export default ProductList;
