import React from "react";
import { create } from "react-test-renderer";

import Login from "./Login";

import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

it("renders the component Login", () => {
  const container = render(<Login />);
  expect(container.firstChild).toMatchSnapshot();
});

describe("Submit Login", () => {
  it("save text", async () => {
    const { getByText, getByTestId } = render(<Login />);
    const inputName = getByTestId("input-name");
    inputName.value = "";
    fireEvent.change(inputName);
    const inputPassword = getByTestId("input-password");
    inputPassword.value = "";
    fireEvent.change(inputPassword);
    fireEvent.click(getByText("Submit"));
    console.log("Submit", getByTestId("error").innerHTML);
    expect(getByTestId("error")).toHaveTextContent(
      "username or password is incorrect"
    );
  });
});
