import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import ErrorBoundaryComponent from "./component";

describe("component", () => {
  it("to match snapshot", () => {
    const props = {
      errorName: "errorName",
      componentStack: "componentStack",
    };
    const wrapper = shallow(<ErrorBoundaryComponent {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
