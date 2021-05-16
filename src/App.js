import './Components/FontAwesome';
import './App.css';
import TodoInputs from './Components/TodoInputs';
import TodoBlock from './Components/TodoBlock';

function App() {

  return (
    <div className="App">
      <div className="todo-container">
        <h1>Task for the day</h1>
        <TodoInputs />
        <TodoBlock />
      </div>
    </div>
  );
}

export default App;
