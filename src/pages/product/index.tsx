import {
  Avatar,
  Box,
  Button,
  Card,
  FlatList,
  HStack,
  Spacer,
  Text,
  VStack,
} from "native-base";
import useProduct from "./hooks/use-product";
import moment from "moment";
moment.locale("es");

const ProductsScreen = () => {
  const { products, total, setFilter } = useProduct();
  return (
    <Box safeArea h="100%" justifyContent="center" alignItems="center">
      <Text>Bienvenido de vuelta!</Text>
      <Text>Ruben Rodriguez</Text>
      <Text>Tus puntos</Text>
      <Card>
        <Text>Diciembre</Text>
        <Text>{total}</Text>
      </Card>
      <Text>Tus movimientos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "muted.50",
            }}
            borderColor="muted.800"
            pl={["0", "4"]}
            pr={["0", "5"]}
            py="2"
          >
            <HStack space={[2, 3]} justifyContent="space-between">
              <Avatar
                size="48px"
                source={{
                  uri: item.image,
                }}
              />
              <VStack>
                <Text>{item.product}</Text>
                <Text>
                  {moment(item.createdAt).format("DD [de] MMMM, YYYY")}
                </Text>
              </VStack>
              <Spacer />
              <Text>
                {item.is_redemption ? "-" : "+"}
                {item.points}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button color={"#000"} onPress={() => setFilter("won")}>
        Ganados
      </Button>
      <Button color={"#000"} onPress={() => setFilter("redeemed")}>
        Canjeados
      </Button>
      <Button color={"#000"} onPress={() => setFilter("all")}>
        Todos
      </Button>
    </Box>
  );
};

export default ProductsScreen;
