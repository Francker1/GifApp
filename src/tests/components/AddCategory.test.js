import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("test in AddCategory component", () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);

    test("shoul render AddCategory correctly", () => {
    
        expect(wrapper).toMatchSnapshot();
    });

    test("should change input search", () => {

        const input = wrapper.find("input");
        const value = "Hola Mundo";

        input.simulate("change", { 
            target: {
                value
            } 
        });

        expect(wrapper.find("p").text().trim()).toBe(value);
    })
});
