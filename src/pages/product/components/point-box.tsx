import { Box, Text } from "native-base";
import { StyleSheet } from "react-native";

interface IPointBoxProps {
  total: number;
}

const PointBox = ({ total }: IPointBoxProps) => (
  <Box
    alignSelf="center"
    bg="#334FFA"
    shadow="5"
    style={PointBoxStyle.card}
    px={19}
    py={21}
    borderRadius={20}
  >
    <Text style={PointBoxStyle.month}>Diciembre</Text>
    <Text style={PointBoxStyle.totalPoints}>{total} pts</Text>
  </Box>
);

const PointBoxStyle = StyleSheet.create({
  card: {
    width: 286,
    height: 143,
  },
  month: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 16,
    lineHeight: 22,
    color: "#ffffff",
    marginBottom: 7,
  },
  totalPoints: {
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 32,
    lineHeight: 44,
    color: "#ffffff",
    marginBottom: 7,
    textAlign: "center",
  },
});

export default PointBox;
