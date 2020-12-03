import React, { useContext } from 'react'
import TodoListStore from '../store/context';

export interface TodoProps {
    text: string;
    id: number;
    completed: boolean;
}

const Todo: React.FC<TodoProps> = (props) => {
    const [State, setState] = useContext(TodoListStore);
    const doneHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        const todo_ = State.all.filter((x: any) => x.id !== props.id);
        const newState = [...todo_, { text: props.text, id: props.id, completed: !props.completed }]
        setState({ ...State, all: newState });
    }
    const deleteHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        console.log(props.completed);

        const todo_ = State.all.filter((x: any) => x.id !== props.id);
        setState({ ...State, all: todo_ });
    }

    return (

        <div className="todo">
            <li className={`todo-item ${props.completed ? 'completed' : ''}`}>
                {props.text}
            </li>
            <button onClick={doneHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;