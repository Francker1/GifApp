
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

interface IMyProps {
    category:string,
    className:string,
    data:[],
    loading:boolean,
}

export const GifGrid:React.FC<IMyProps> = ( {category} ) => {

    // const [images, setImages] = useState([]);

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            { loading && <p>Loading...</p> }
            
            <div className="card-grid">
                
                {
                    images.map( (img:any) => (                    
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
                
            </div>
        </>
    )
}

GifGrid.propTypes = {

    category: PropTypes.string.isRequired,
}