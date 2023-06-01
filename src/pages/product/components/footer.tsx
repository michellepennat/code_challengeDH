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
          accessibilityRole="button"
          testID="won"
          _text={{ fontWeight: "bold" }}
          style={FooterStyle.primaryButton}
          width="48%"
          onPress={() => setFilter("won")}
        >
          Ganados
        </Button>
        <Button
          accessibilityRole="button"
          testID="redeemed"
          _text={{ fontWeight: "bold" }}
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
        accessibilityRole="button"
        testID="all"
        _text={{ fontWeight: "bold" }}
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
    backgroundColor: "#334FFA",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    color: "#ffffff",
    borderRadius: 10,
    height: 50,
  },
});

export default Footer;
