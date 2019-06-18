import React from "react";
import { create } from "react-test-renderer";

import Phone from "./Phone";

import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("renders the component Phone", () => {
  const container = render(<Phone />);
  expect(container.firstChild).toMatchSnapshot();
});

describe("Submit", () => {
  it("save text", async () => {
    const { getByText, getByTestId } = render(<Phone />);
    const input = getByTestId("input");
    input.value = "123";
    fireEvent.change(input);
    fireEvent.click(getByText("Submit"));
    console.log("Submit", getByTestId("error").innerHTML);
    expect(getByTestId("error")).toHaveTextContent("not valid number");
  });
});
