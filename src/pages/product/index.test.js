import { render, screen } from "@testing-library/react-native";
import PointBox from "./components/point-box";
import Header from "./components/header";

test("Should render text", () => {
  render(<PointBox total={100} />);
  const textElement = screen.getByText("Diciembre");
  expect(textElement).toBeDefined();
});

test("Should render points", () => {
  const total = 100;
  render(<PointBox total={total} />);
  const pointsElement = screen.getByText(`${total} pts`);
  expect(pointsElement).toBeDefined();
});

test("Should render text header", () => {
  render(<Header />);
  const titleElement = screen.getByText("Bienvenido de vuelta!");
  const subtitleElement = screen.getByText("Ruben Rodriguez");
  expect(titleElement).toBeDefined();
  expect(subtitleElement).toBeDefined();
});

test("Should render text header", () => {
  render(<Header />);
  const titleElement = screen.getByText("Bienvenido de vuelta!");
  const subtitleElement = screen.getByText("Ruben Rodriguez");
  expect(titleElement).toBeDefined();
  expect(subtitleElement).toBeDefined();
});
