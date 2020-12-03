import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import TodoListStore from './store/context';


interface Todo_ {
  text: string; 
  completed: boolean; 
  id: number
}

 enum status {
   'all', 'completed', 'uncompleted'
 }
interface allState {
  completed: Todo_[];
  all: Todo_[];
  uncompleted: Todo_[];
  status?: status;
}
export interface AppProps {

}

let setupState: any = {completed: [], all: [], uncompleted: [], status: status.all};


//if localStorage is Empty
if(Object.keys(JSON.parse(localStorage.getItem('todos')!)).length > 0) {

  setupState = JSON.parse(localStorage.getItem('todos')!);
  localStorage.removeItem('todos');
}

const App: React.FC<AppProps> = () => {
  const [State, setState] = useState<allState>(setupState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(State));
  }, [State]);

  return (
    <TodoListStore.Provider value={[State, setState]}>
      <div className="App">
        <header>
          Hector Simple Todo List Ts
        </header>
        <Form/>
        <TodoList/>
      </div>
    </TodoListStore.Provider>

      );
}
 
export default App;

