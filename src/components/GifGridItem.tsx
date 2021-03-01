import React from 'react';
import PropTypes from 'prop-types';

interface IMyProps {
    props?: any,
    id: string,
    title: string,
    url: string,
    className: string
}

export const GifGridItem:React.FC<IMyProps> = ({ id, title, url }) => {
    
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={url} alt={title}/>
            <p>{title}</p>
            <p>ID: {id}</p>
        </div>
    )
}


GifGridItem.propTypes = {

    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}