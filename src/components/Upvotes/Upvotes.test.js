import React from "react";
import { shallow } from "enzyme";
import Upvotes from "./Upvotes";

describe("MyComponent", () => {
  const onCountChange = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Upvotes onCountChange={onCountChange} />);
  });

  it("renders", () => {
    expect(wrapper).not.toBeNull();
  });

  it("shows my default text", () => {
    expect(wrapper.find("#count").text()).toEqual("Upvotes: 0");
  });

  it("correctly increments the count by 1", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("#count").text()).toEqual("Upvotes: 1");
  });

  it("correctly increments the count by 4", () => {
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    wrapper.find("button").simulate("click");
    expect(wrapper.find("#count").text()).toEqual("Upvotes: 4");
  });
});
