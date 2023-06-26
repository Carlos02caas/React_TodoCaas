import React, { useContext } from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { ModalTodos } from '../ModalTodos';
import { InitPage } from '../initPage';
import { TodoPage } from '../TodoPage';
import { TodoForm } from '../TodoForm';

import AgregandoTodo from '../assets/img/AgregandoTodo.png'


const AppUI = () => {
    const {
        loading,
        error,
        searchedTodos,
        conmpleteTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = useContext(TodoContext);

    return (
        <React.Fragment>
            <div className='TodooApp'>
                <div className='TodoApp-createItem'>
                    <InitPage />
                </div>
                <div className='TodoApp-list'>
                    <TodoCounter />
                    <TodoSearch />


                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError />}
                        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={
                                    () => conmpleteTodo(todo.text)
                                }
                                onDelete={
                                    () => deleteTodo(todo.text)
                                }
                            />
                        ))}
                        <TodoPage/>
                    </TodoList>

                    <CreateTodoButton setOpenModal={ setOpenModal }/>

                    {openModal && (
                        <Modal>
                            <TodoForm/>
                        </Modal>
                    )}
                    {openModal && (
                        <ModalTodos>
                            <img src={AgregandoTodo} alt="" />
                        </ModalTodos>
                    )}

                </div>
            </div>

        </React.Fragment>
    );
}

export { AppUI };
