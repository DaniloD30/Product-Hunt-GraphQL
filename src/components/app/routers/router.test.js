import React from "react";
import { shallow, mount } from "enzyme";
import Component from "./Routers";

describe("Routers", () => {
  it("renders three <Component /> components", () => {
    const wrapper = shallow(<Component.Anonymous />);
    expect(wrapper.find(Component)).toHaveLength(0);
  });
});
