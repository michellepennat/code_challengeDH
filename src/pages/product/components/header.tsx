import { StatusBar, Text } from "native-base";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
      <Text style={HeaderStyle.title}>Bienvenido de vuelta!</Text>
      <Text style={HeaderStyle.textUser}>Ruben Rodriguez</Text>
    </>
  );
};

const HeaderStyle = StyleSheet.create({
  title: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 20,
    lineHeight: 27,
    color: "#020202",
  },
  textUser: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21.86,
    color: "#020202",
  },
});

export default Header;
