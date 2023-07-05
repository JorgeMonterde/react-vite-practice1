import React from "react";
import { shallow } from "enzyme";
import ControlButtons from "./ControlButtons";

describe("ControlButtons", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ControlButtons />);
    expect(wrapper).toMatchSnapshot();
  });
});
