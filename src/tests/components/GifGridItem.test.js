import React from 'react';
import {shallow} from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe("Tests in <GifGridItems />", () => {

    const id = "789ERER99FC";
    const title = "Un título";
    const url = "https://localhost/algo.jpg";
    const wrapper = shallow( <GifGridItem id={id} title={title} url={url} /> );
    
    test("should render the component correctly", () => {

        expect(wrapper).toMatchSnapshot();
    });

    test("should have a paragraph with a title", () => {

      //at() recoge el nodo de un elemento dado que coincida con el atributo find: ref-> https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/at.html
      const paragraph = wrapper.find("p").at(0);
      expect(paragraph.text().trim()).toBe(title);
    });

    test("should have imagen equals to url and alt of props", () => {

        const img = wrapper.find("img");
        // console.log(img.props().src)

        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("should have className = animate__zoomIn", () => {

        const div = wrapper.exists("div.animate__zoomIn");
        // console.log(div); //true

        expect(div).toEqual(true);

        
    });
});
