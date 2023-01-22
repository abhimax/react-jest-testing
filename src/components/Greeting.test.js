import { render, screen } from "@testing-library/react";
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
});
