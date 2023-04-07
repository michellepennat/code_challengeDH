import { Button, HStack } from "native-base";
import { StyleSheet } from "react-native";
import { enumFilter } from "../hooks/use-product";

interface IFooterProps {
  actualFilter: enumFilter;
  setFilter: (filter: enumFilter) => void;
}

const Footer = ({ actualFilter, setFilter }: IFooterProps) => (
  <HStack justifyContent="space-between">
    {actualFilter === "all" && (
      <>
        <Button
          style={FooterStyle.primaryButton}
          width="48%"
          fontWeight="bold"
          onPress={() => setFilter("won")}
        >
          Ganados
        </Button>
        <Button
          style={FooterStyle.primaryButton}
          width="48%"
          onPress={() => setFilter("redeemed")}
        >
          Canjeados
        </Button>
      </>
    )}
    {actualFilter !== "all" && (
      <Button
        style={FooterStyle.primaryButton}
        width="100%"
        fontWeight="bold"
        onPress={() => setFilter("all")}
      >
        Todos
      </Button>
    )}
  </HStack>
);

const FooterStyle = StyleSheet.create({
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

export default Footer;
