import './App.css';
import Todos from './Store';

function App() {

  const listItems = Todos.map((item, index)=> <li key={index}>{item.text}</li> )

  return (
    <>
    <h1>TODO List</h1>
    <ul>{listItems}</ul>
    </>
  );
}

export default App;
