import React, { useContext } from 'react';
import "./TodoCounter.css"
import { TodoContext } from '../TodoContext';

const TodoCounter = () => {

    const {
        loading,
        completedTodos,
        totalTodos,
    } = useContext(TodoContext);

    const todoFinish = totalTodos - completedTodos;
    return (
        <div>
            {((!!todoFinish) && !loading) && <h1 className='TodoCounter'>Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO's</h1>}
            {((!todoFinish) && !loading) && <h1 className='TodoCounter'>No hay ToDo's por completar</h1>}
            {(!!loading) && <h1 className='TodoCounter'>Cargando ToDo's</h1>}
        </div>

    );
}
export { TodoCounter };
