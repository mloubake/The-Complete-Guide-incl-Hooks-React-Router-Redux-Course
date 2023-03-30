import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Testing <Async />...", () => {
  test("...renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    render(<Async />);

    //Diferença entre getSomething() and findSomething() é que o find retorna uma Promise
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
