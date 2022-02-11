import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("omponentDidCatch", () => {
    const component = shallow(
      <ErrorBoundary errorName="errorName" componentStack="componentStack" />
    );
    const inst = component.instance();
    const spy = jest.spyOn(inst, "setState");
    inst.componentDidCatch("error", "info");
    expect(spy).toHaveBeenCalled();
  });
});
