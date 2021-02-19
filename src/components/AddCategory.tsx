
import React, { useState } from 'react';
import PropTypes from 'prop-types';

type FormElement = React.FormEvent<HTMLFormElement>;

interface IMyProps {
    setCategories:any,
}


export const AddCategory:React.FC<IMyProps> = ( { setCategories }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e:any) => {

        setInputValue(e.target.value)
    }

    const handleSubmit = (e:FormElement) => {

        e.preventDefault();

        if( inputValue.trim().length > 2 ){

            //si quisiera acumular debajo los elementos buscados:
            // setCategories( (cats:any) => [ inputValue, ...cats, ] );
            setCategories( () => [ inputValue ] );
            setInputValue("");
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
