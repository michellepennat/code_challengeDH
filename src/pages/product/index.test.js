import { fireEvent, render, screen } from "@testing-library/react-native";
import PointBox from "./components/point-box";
import Header from "./components/header";
import Footer from "./components/footer";

describe("Test for PointBox", () => {
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
});

describe("Test for Header", () => {
  test("Should render text header", () => {
    render(<Header />);
    const titleElement = screen.getByText("Bienvenido de vuelta!");
    const subtitleElement = screen.getByText("Ruben Rodriguez");
    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
  });
});

describe("Test for Footer", () => {
  test("Should render button won", () => {
    const setFilterMock = jest.fn();
    render(<Footer key={1} setFilter={setFilterMock} actualFilter={"all"} />);
    const wonButon = screen.getByTestId("won");
    fireEvent.press(wonButon);
    expect(setFilterMock).toHaveBeenCalledWith("won");
  });
  test("Should render button redeemed", () => {
    const setFilterMock = jest.fn();
    render(<Footer key={1} setFilter={setFilterMock} actualFilter={"all"} />);
    const redeemedButon = screen.getByTestId("redeemed");
    fireEvent.press(redeemedButon);
    expect(setFilterMock).toHaveBeenCalledWith("redeemed");
  });
  test("Should render button all", () => {
    const setFilterMock = jest.fn();
    render(
      <Footer key={1} setFilter={setFilterMock} actualFilter={"redeemed"} />
    );
    const allButon = screen.getByTestId("all");
    fireEvent.press(allButon);
    expect(setFilterMock).toHaveBeenCalledWith("all");
  });
});
