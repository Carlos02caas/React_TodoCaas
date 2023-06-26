import React from 'react';
import "./TodoItem.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const TodoItem = (props) => {
    return (
        <div className='TodoItem'>
            <li>
                <span className={`icon icon-check ${props.completed && "icon-check--active"} `} 
                    onClick={props.onComplete}
                >
                        <FontAwesomeIcon icon= {faCheck}  />
                </span>
                <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
                <span className='icon icon-delete'
                    onClick={props.onDelete}
                >
                    <FontAwesomeIcon icon= {faTrash}  />
                </span>
            </li>
        </div>
    );
}

export {TodoItem};
