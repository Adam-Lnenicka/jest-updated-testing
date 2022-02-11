import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import React from "react";
import { act } from "react-dom/test-utils";
import User from "./User";

jest.mock("./_fetchUsers", () => {
  return {
    __esModule: true,
    default: async () => [
      {
        id: 1,
        name: "Test Author 1",
        email: "Test email",
        username: "Test username",
      },
      {
        id: 2,
        name: "Test Author 2",
        email: "Test email",
        username: "Test username",
      },
    ],
  };
});

test("matches snapshot", async () => {
  const Users = User;

  let wrapper;

  await act(async () => {
    wrapper = mount(<Users />);
  });

  wrapper.update();

  expect(toJSON(wrapper)).toMatchSnapshot();
});
