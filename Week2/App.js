import './App.css';
import Cards from './Cards';
import Hello from './Hello';

function App() {
  return (
    <>
    <div className = "app">
    <Cards message = "Title1" subtitle ="Sub Title1"/>
    </div>
    <div className='app'>
    <Hello message = "Hello World 1!"/>
    </div>
    
    
    <Cards message = "Title2" subtitle ="Sub Title2" />
    <Hello message = "Hello World 2!"/>
    <Cards message = "Title3" subtitle ="Sub Title3"/>
    <Hello message = "Hello World 3!"/>
    <Cards message = "Title4" subtitle ="Sub Title4"/>
    <Hello message = "Hello World 4!"/>
    </>
    
  );
}

export default App;
