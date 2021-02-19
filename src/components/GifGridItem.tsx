import React from 'react'

interface IMyProps {
    props?: any,
    id: string,
    title: string,
    url?: string,
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

