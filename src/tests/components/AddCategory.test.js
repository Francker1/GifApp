import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("test in AddCategory component", () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {

        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

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
    });

    test("Don't post info submit with inputValue empty", () => {

        wrapper.find("form").simulate("submit", { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test("Should call setCategories and clean input box", () => {

        const value = "Homer";

        //1. simular el inputChange
        wrapper.find("input").simulate("change", { target: { value } });

        //2. simular el submit
        wrapper.find("form").simulate("submit", { preventDefault() {} });

        //3. setCategories debe haberse llamado
        expect( setCategories ).toHaveBeenCalled();
        
        //if I want check times the function has been called:
        expect( setCategories ).toHaveBeenCalledTimes(1);

        //if I check the function has been called with function (because setCategories expect a function)
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        //4. el valor del input debe ser vacío
        expect( wrapper.find("input").prop("value") ).toBe("");


    });
});
