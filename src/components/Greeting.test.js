import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("Test Greeting Component", () => {
  //AAA
  //Arrange
  render(<Greeting />);
  //Act
  // nothing

  //Assert
  const visitor = screen.getByText("Hey You!", { exact: false });
  expect(visitor).toBeInTheDocument();
});
