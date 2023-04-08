import moment from "moment";
import "moment/locale/es";
import { Box, Button, Image, ScrollView, StatusBar, Text } from "native-base";
import { Platform, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useDetailProduct from "./hooks";

moment.locale("es");

interface IDetailProductScreenProps {
  navigation: any;
}

const DetailProductScreen = ({ navigation }: IDetailProductScreenProps) => {
  const { selectedProduct } = useDetailProduct();
  return (
    <>
      <SafeAreaView style={DetailProductStyle.areaView}>
        <Text style={DetailProductStyle.title}>{selectedProduct?.product}</Text>
      </SafeAreaView>
      <ScrollView style={DetailProductStyle.wrapper}>
        <Box
          shadow="3"
          style={DetailProductStyle.boxImage}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            size="200px"
            borderRadius={10}
            alt={selectedProduct?.product}
            source={{
              uri: selectedProduct?.image,
            }}
          />
        </Box>
        <Text style={DetailProductStyle.subtitle}>Detalles del producto:</Text>
        <Text style={DetailProductStyle.textDate}>
          Comprado el{" "}
          {moment(selectedProduct?.createdAt).format("DD [de] MMMM, YYYY")}
        </Text>
        <Text style={DetailProductStyle.subtitle}>
          Con esta compra{" "}
          {selectedProduct?.is_redemption ? "redimiste" : "acumulaste"} :
        </Text>
        <Text style={DetailProductStyle.textPoints}>
          {selectedProduct?.points} puntos
        </Text>
        <Button
          onPress={() => navigation.goBack()}
          _text={{ fontWeight: "bold" }}
          style={DetailProductStyle.primaryButton}
          width="100%"
        >
          Aceptar
        </Button>
        <StatusBar barStyle="dark-content" backgroundColor="#CFD6FF" />
      </ScrollView>
    </>
  );
};

export default DetailProductScreen;

const DetailProductStyle = StyleSheet.create({
  areaView: {
    backgroundColor: "#CFD6FF",
    padding: 20,
    paddingBottom: Platform.OS === "ios" ? 0 : 24,
  },
  wrapper: {
    backgroundColor: "#F8F8F8,",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 28,
  },
  boxImage: {
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  subtitle: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    lineHeight: 19,
    color: "#9B9898",
    marginVertical: 20,
  },
  textDate: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
  },
  textPoints: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
    marginTop: 12,
  },
  primaryButton: {
    backgroundColor: "#334FFA",
    fontStyle: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "#ffffff",
    borderRadius: 10,
    marginTop: 47,
    height: 50,
  },
});
