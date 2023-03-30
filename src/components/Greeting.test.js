import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Testing <Greeting />...", () => {
  test("...renders Hello Test World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...no action

    // Assert
    const helloTestWorldElement = screen.getByText("Hello Test World", {
      exact: false,
    });
    expect(helloTestWorldElement).toBeInTheDocument();
  });

  test('...renders "good to see you" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputParagraphElement = screen.getByText("good to see you", {
      exact: false,
    });
    expect(outputParagraphElement).toBeInTheDocument;
  });

  test('...renders "Changed!" if the button was clicked', async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button", { name: /Change Text/ });
    await userEvent.click(buttonElement);

    const outputParagraphElement = screen.getByText("Changed!");
    expect(outputParagraphElement).toBeIntheDocument;
  });

  test('...does not render "good to see you" if button was clicked', async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputParagraphElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputParagraphElement).toBeNull();
  });
});
