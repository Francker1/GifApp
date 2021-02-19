import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {

    const [state, setState] = useState<any>({
        data: [],
        loading: true,
    });

    useEffect(() =>{
        
        getGifs(category)
            .then( imgs => {

                //simulate resolve data from api with setTimeout
                setState({
                    data: imgs,
                    loading: false,
                }); 
            });
            
    }, [category])

    return state;
}