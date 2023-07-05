import React from "react";
import { shallow } from "enzyme";
import Formulario from "./Formulario";

describe("Formulario", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Formulario />);
    expect(wrapper).toMatchSnapshot();
  });
});
