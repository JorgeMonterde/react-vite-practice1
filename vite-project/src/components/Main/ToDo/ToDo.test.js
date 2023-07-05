import React from "react";
import { shallow } from "enzyme";
import ToDo from "./ToDo";

describe("ToDo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ToDo />);
    expect(wrapper).toMatchSnapshot();
  });
});
