import React from "react";
import ReactDom from "react-dom";
import './modalTodos.css';

const ModalTodos = ({ children }) => {
    return ReactDom.createPortal(
        <div className="ModalTodosBackground">
            {children}
        </div>,
        document.getElementById('modalTodos')
    );
}

export {ModalTodos};