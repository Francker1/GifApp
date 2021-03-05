
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Footer } from './components/Footer';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            <ol>
                { 
                    categories.map( (cat, i) => (
                        <GifGrid
                            key={i} 
                            category={cat}
                        />
                    )) 
                }
            </ol>
            <div>
                <p>Encuentra aquí tus Gifs y pasa un buen rato.</p>
                <ul>
                    Próximamente:
                    <li>Estilos</li>
                    <li>Paginación</li>
                    <li>Mejora del UI</li>
                    <li>Posibilidad de opciones para insertar GIF</li>
                    <li>Y más...</li>
                </ul>    
            </div>
            <Footer />
        </>
    );
}
