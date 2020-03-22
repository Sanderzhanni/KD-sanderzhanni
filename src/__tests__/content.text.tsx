import renderer from "react-test-renderer";
import {BrowserRouter, Link} from "react-router-dom";
import React from "react";
import Content from "../components/Content";
import Enzyme, {shallow, ShallowWrapper} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}): ShallowWrapper =>{
  return shallow(<Content {...props}/>);
};

describe("testing header component", () =>{
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Content/>
        </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has a link", ()=>{
    expect(setup().find(Link).length).toBeGreaterThan(0);
  });
});