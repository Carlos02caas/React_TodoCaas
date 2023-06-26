import React from "react";
import ReactDom from "react-dom";
import './modal.css';

const Modal = ({ children }) => {
    return ReactDom.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};
