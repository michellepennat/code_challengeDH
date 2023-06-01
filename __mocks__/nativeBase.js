Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("native-base", () => {
  const React = require("react");
  const { View, Text, Button } = require("react-native");

  // Componente Button
  const MockedButton = jest.fn(({ children, ...props }) => (
    <Button {...props}>{children}</Button>
  ));

  // Componente View
  const MockedView = jest.fn(({ children, ...props }) => (
    <View {...props}>{children}</View>
  ));

  // Componente Box
  const MockedBox = jest.fn(({ children, ...props }) => (
    <View {...props}>{children}</View>
  ));

  // Componente Text
  const MockedText = jest.fn(({ children, ...props }) => (
    <Text {...props}>{children}</Text>
  ));

  return {
    Button: MockedButton,
    View: MockedView,
    Text: MockedText,
    Box: MockedBox,
  };
});
