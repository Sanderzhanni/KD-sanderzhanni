import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Header from "../components/Header";
import React from "react";

describe("testing header component", () =>{
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});