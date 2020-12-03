import React, { useContext, useState } from 'react';
import TodoListStore from '../store/context';

export interface FormProps {

}

const Form: React.FC<FormProps> = () => {
    const [State, setState] = useContext(TodoListStore);
    const [Text, setText] = useState('');


    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (Text.length === 0) return;
        const all = [...State.all, { text: Text, completed: false, id: Math.random().toString() }];
        setState({ ...State, all: all, status: 'all' });
        setText('');
    }

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(State)
        setText(event.target.value);

    }

    const statusHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault();
        console.log(event.target.value);
        if (event.target.value === 'completed') {
            const completedTask = State.all.filter((el: any) => {
                return el.completed === true
            });
            setState({ ...State, completed: completedTask, status: event.target.value });
        }
        if (event.target.value === 'uncompleted') {
            const uncompletedTask = State.all.filter((el: any) => {
                return el.completed === false
            });
            setState({ ...State, uncompleted: uncompletedTask, status: event.target.value });
        }

        if (event.target.value === 'all') {
            setState({ ...State, status: event.target.value });
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={inputHandler} type="text" className="todo-input" value={Text} />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">

                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all" >All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;