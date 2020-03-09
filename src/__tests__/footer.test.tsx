import React from 'react';
import Footer from "../components/Footer";
import {FooterLink, AccordionCard} from "../components/Footer";
import {Accordion} from "react-bootstrap";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import Enzyme, {mount, shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe("testing footer component", () =>{
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Footer/>
        </BrowserRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

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

  it("Accordion", () =>{
    const name = "test";
    const eventKey = "0";
    const wrapper = shallow(<AccordionCard HandleAccordionToggle={(): null => null} activeName={""} eventKey={eventKey} name={name}/>);
    const nameH3 = wrapper.find('h3');
    const toggle = wrapper.find(Accordion.Toggle);
    const collapse = wrapper.find(Accordion.Collapse);
    expect(toggle.prop('eventKey')).toBe(eventKey);
    expect(collapse.prop('eventKey')).toBe(eventKey);
    expect(nameH3.text()).toBe(name);
  });

  it("FooterLink", () =>{
    const name = "test";
    const path = "/testpath";
    const wrapper = shallow(<FooterLink name={name} path={path}/>);
    const nameDiv = wrapper.find('.footerlink__name');
    const link = wrapper.find('Link');
    expect(link.prop('to')).toBe('/testpath');
    expect(nameDiv.text()).toBe(name);
  });
});