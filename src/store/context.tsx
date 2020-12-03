//we use context API
import React from 'react';


const store: any[] = [];

//if localStorage is Empty
if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify({}))
}

const TodoListStore = React.createContext(store);
TodoListStore.displayName = 'TodoListStore';
export default TodoListStore;
