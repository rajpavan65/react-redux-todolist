import './App.css';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <div style={{display:"flex", alignItems:"start", justifyContent:"center", width:"300px",flexDirection:"column",height:"600px",margin:"0 auto"}}>
        <h2>Tasks List</h2>
        <Task />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
