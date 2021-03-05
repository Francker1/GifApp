import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';


describe('test in GiffExpertApp component', () => {
   
    test("should GiffExpertApp render correctly", () => {

      const wrapper = shallow(<GifExpertApp />);
      expect(wrapper).toMatchSnapshot();
    });

    test("should render a categories list", () => {

      const categories = ["Homer", "Borat"];
      const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
