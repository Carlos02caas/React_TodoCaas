import React, { useContext } from 'react';
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext';

const TodoSearch = () => {

    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext);

    return (
        <div className='TodoSearch'>
            <input className='TodoSearch-input' type="text" placeholder="Limpiar Carro"
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value);
                }}
            />
        </div>
    );
}

export { TodoSearch };
