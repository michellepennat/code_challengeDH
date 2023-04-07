import moment from "moment";
import { Box, Button, Image, Text } from "native-base";
import useDetailProduct from "./hooks";
import "moment/locale/es";

moment.locale("es");

const DetailProductScreen = () => {
  const { selectedProduct } = useDetailProduct();
  // if (!selectedProduct) <>No</>;
  return (
    <Box safeArea h="100%" justifyContent="center" alignItems="center">
      <Text>Hola {selectedProduct?.product}</Text>
      <Image
        size="100px"
        borderRadius={10}
        alt={selectedProduct?.product}
        source={{
          uri: selectedProduct?.image,
        }}
      />
      <Text>Detalles del producto:</Text>
      <Text>
        Comprado el{" "}
        {moment(selectedProduct?.createdAt).format("DD [de] MMMM, YYYY")}
      </Text>
      <Text>
        Con esta compra{" "}
        {selectedProduct?.is_redemption ? "redimiste" : "acumulaste"} :
      </Text>
      <Text>{selectedProduct?.points} puntos</Text>
      <Button>Aceptar</Button>
    </Box>
  );
};

export default DetailProductScreen;
