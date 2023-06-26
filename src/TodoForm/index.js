import React, { useContext, useState } from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

const TodoForm = () => {
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel =(event)=>{
        setOpenModal(false);
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe Tu nuevo ToDo</label>
            <textarea placeholder='Ir de compras' value={newTodoValue} onChange={onChange}/>
            <div className='TodoForm-buttonContainer'>
                <button type='' className='TodoForm-button TodoForm-button--cancel' onClick={onCancel}>Cancelar</button>
                <button className='TodoForm-button TodoForm-button--add'onClick={() => {
                    
                }}>Agregar</button>
            </div>
        </form>
            
    );
}

export { TodoForm };
