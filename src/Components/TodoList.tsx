import React, {useContext} from 'react';
import TodoListStore from '../store/context';
import Todo from './Todo';

export interface TodoListProps {
    
}
interface Todo_ {
    text: string; 
    completed: boolean; 
    id: number
  }
const TodoList: React.FC<TodoListProps> = (props) => {
    const [State, _] = useContext(TodoListStore);


    let state = null;

    if(State.status === 'all')
    {
        state = State.all;
    }

    if(State.status === 'completed'){
        state = State.completed;
    }

    if(State.status === 'uncompleted'){
        state = State.uncompleted;

    }

    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {state? state.map((task:  Todo_) =>{
                    return <Todo
                        key={task.id}
                        text={task.text}
                        id={task.id}
                        completed={task.completed}                    
                    />
                })
                : null}
            </ul>
        </div>
     );
}
 
export default TodoList;