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
  const nativeBase = jest.requireActual("native-base");
  const { View, Text, Button } = require("react-native");

  // Component Button
  const MockedButton = jest.fn(({ children, ...props }) => (
    <Button title="" {...props}>{children}</Button>
  ));

  // Component View
  const MockedView = jest.fn(({ children, ...props }) => (
    <View {...props}>{children}</View>
  ));

  // Component Box
  const MockedBox = jest.fn(({ children, ...props }) => (
    <View {...props}>{children}</View>
  ));
  const MockedHStack = jest.fn(({ children, ...props }) => (
    <View {...props}>{children}</View>
  ));

  // Component Text
  const MockedText = jest.fn(({ children, ...props }) => (
    <Text {...props}>{children}</Text>
  ));

  return {
    Button: jest.fn().mockReturnValue(null),
    Button: MockedButton,
    View: MockedView,
    Text: MockedText,
    Box: MockedBox,
    HStack: MockedHStack,
  };
});
