import React from 'react';
import {shallow} from "enzyme";
import { GifGridItem } from '../../components/GifGridItem';

describe("Tests in <GifGridItems />", () => {
    
    test("should render the component correctly", () => {

        const wrapper = shallow( <GifGridItem /> );
        expect(wrapper).toMatchSnapshot();
    });
});
