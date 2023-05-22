import moment from "moment";
import "moment/locale/es";
import {
  Box,
  Button,
  ChevronRightIcon,
  FlatList,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import { Dimensions, StyleSheet } from "react-native";
import { IProduct } from "../../../services/product/interface";

moment.locale("es");

const screenHeight = Dimensions.get("window").height;

interface IProductListProps {
  products: IProduct[];
  selectProduct: (product: IProduct) => void;
}

const ProductList = ({ selectProduct, products }: IProductListProps) => (
  <FlatList
    style={ProductListStyle.listProducts}
    bg="#ffffff"
    data={products}
    renderItem={({ item }: { item: IProduct }) => (
      <Button
        onPress={() => {
          selectProduct(item);
        }}
        style={ProductListStyle.product}
        w={"100%"}
        width={"100%"}
      >
        <HStack>
          <Image
            size="55px"
            borderRadius={10}
            mr="11"
            alt={item.product}
            source={{
              uri: item.image,
            }}
          />
          <VStack width={"50%"}>
            <Text style={ProductListStyle.textProduct}>{item.product}</Text>
            <Text style={ProductListStyle.date}>
              {moment(item.createdAt).format("DD [de] MMMM, YYYY")}
            </Text>
          </VStack>
          <HStack
            width={"30%"}
            justifyContent={"flex-end"}
            alignItems={"center"}
          >
            <Text
              style={ProductListStyle.points}
              color={item.is_redemption ? "#FF0000" : "#00B833"}
            >
              {item.is_redemption ? "-" : "+"}
            </Text>
            <Text color="#000" style={ProductListStyle.points}>
              {item.points}
            </Text>
            <Box style={ProductListStyle.icon}>
              <ChevronRightIcon />
            </Box>
          </HStack>
        </HStack>
      </Button>
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
    backgroundColor: "#ffffff",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    padding: 0,
    marginBottom: 20,
    minWidth: "100%",
  },
  textProduct: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19,
    color: "#000000",
    marginBottom: 7,
  },
  date: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#000000",
  },
  points: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
  },
  icon: {
    color: "#000000",
    marginLeft: 17.23,
    justifyContent: "center",
  },
});

export default ProductList;
