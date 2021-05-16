import './Components/FontAwesome';
import './App.css';
import TodoInputs from './Components/TodoInputs';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h1>Task for the day</h1>
        <TodoInputs />
      </div>
    </div>
  );
}

export default App;
