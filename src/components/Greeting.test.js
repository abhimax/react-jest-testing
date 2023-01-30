import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('<Greeting/> component tests', ()=>{
    test("render hey you as a text", () => {
        //AAA
        //Arrange
        render(<Greeting />);
        //Act
        // nothing
      
        //Assert
        const visitor = screen.getByText("Hey You!", { exact: false });
        expect(visitor).toBeInTheDocument();
      });
      test("render It's great to see you! if the button was not clicked",
      () => {
        // Arrange
        render(<Greeting/>);
        // Act
        // Assert
        const outputElement = screen.getByText("It's great to see you!");
        expect(outputElement).toBeInTheDocument();
      }
      );

      test("render Changed! text if the button was clicked", ()=>{
        //Arrange
        render(<Greeting/>);
        //Act
        const btnChangedText = screen.getByRole("button");
        userEvent.click(btnChangedText);
        //Assert
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
      });

      test("does not render It's great to see you! text if the button was clicked", ()=>{
        //Arrange
        render(<Greeting/>);
        //Act
        const btnChangedText = screen.getByRole("button");
        userEvent.click(btnChangedText);
        //Assert
        // const outputElement = screen.getByText("It's great to see you!");
        // expect(outputElement).not.toBeInTheDocument();

        const outputElement = screen.queryByText("It's great to see you!");
        expect(outputElement).toBeNull();
      });
});
