import React from 'react';
import Footer from "../components/Footer";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it("renders correctly", () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Footer/>
            </BrowserRouter>
        ).toJSON();
    expect(tree).toMatchSnapshot();
});

describe("testing handleToggleFunction", () =>{
   it("should change state value", ()=>{
       const wrapper = mount(
           <BrowserRouter>
             <Footer />
           </BrowserRouter>
           );
       const component = wrapper.find(Footer);
       const target = component.find(".accordion-header").first();
       expect(component.state('activeEvent')).toBe("");
       target.simulate('click');
       expect(component.state('activeEvent')).toBe(target.text());
   });
});