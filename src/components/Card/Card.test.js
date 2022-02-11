import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import React from "react";
import Card from "./Card";

describe("Card", () => {
  it("matches snapshot", () => {
    const props = {
      name: "name",
      image: "image",
      desc: "desc",
      price: "price",
    };
    const wrapper = shallow(<Card {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
