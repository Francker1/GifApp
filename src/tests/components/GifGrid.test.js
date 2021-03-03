import React from 'react';
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock("../../hooks/useFetchGifs");

describe('Tests with <GifGrid /> component', () => {

    const category = "Borat";
    
   
    test("should render GifrGrid component correctly", () => {

        useFetchGifs.mockReturnValue({
          data: [],
          loading: true,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test("should show items when load images with useFetchGifs", () => {

        const gifs = [
          {
            id: "12345",
            url: "http://localhost/gif.jpg",
            title: "Random thing",
          },
          {
            id: "qwerty",
            url: "http://localhost/gif.jpg",
            title: "Random thing",
          },
        ];

        useFetchGifs.mockReturnValue({
          data: gifs,
          loading: false,
        });

        const wrapper = shallow(<GifGrid category={category} />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
    });
});
