import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { App } from "./App";
it("renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
