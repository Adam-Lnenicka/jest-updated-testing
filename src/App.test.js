import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";
import App from "./App";
import Banner from "./Banner";

describe("App", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("compares snapshot", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("Find person List", () => {
    wrapper.find(<Banner />);
  });

  it("changes to light-theme", () => {
    wrapper.find("#toggle-theme").simulate("click");
    expect(wrapper.find("#toggle-theme").text()).toEqual(
      "Switch to Dark Theme"
    );
  });

  it("goes back to dark theme", () => {
    wrapper.find("#toggle-theme").simulate("click");
    wrapper.find("#toggle-theme").simulate("click");
    expect(wrapper.find("#toggle-theme").text()).toEqual(
      "Switch to Dark Theme"
    );
  });

  it("changes of class", () => {
    wrapper.find("#toggle-theme").simulate("click");
    expect(wrapper.find("#app").hasClass("dark-theme")).toEqual(true);
  });

  it("changes of class to light", () => {
    wrapper.find("#toggle-theme").simulate("click");
    expect(wrapper.find("#app").hasClass("light-theme")).toEqual(true);
  });

  // it("correctly increments the count by 1", () => {
  //   wrapper.find("button").simulate("click");
  //   expect(wrapper.find("#count").text()).toEqual("Count: 1");
  // });
});
