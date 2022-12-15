import './App.css';
import Cards from './Cards';


function App() {
  
  const box1 = {
   backgroundColor: "red",
  }

  const box2 = {
    backgroundColor:"orange",
  }
  const box3 = {
    backgroundColor:"yellow",
  }
  const box4 = {
    backgroundColor:"green"
  }

  return (
    <>
    <div className = "app" style={box1}>
    <Cards message = "Title1" subtitle ="Sub Title1" info = "Hello World 1!"/>
    </div>
    
    <div className='app' style={box2}>
    <Cards message = "Title2" subtitle ="Sub Title2" info =  "Hello World 2!" />
    </div>

    <div className='app' style={box3}>
    <Cards message = "Title3" subtitle ="Sub Title3" info = "Hello World 3!"/>
    </div>

    <div className='app' style={box4}>
    <Cards message = "Title4" subtitle ="Sub Title4" info = "Hello World 4!"/>
    </div>
    
    </>
    
  );
}

export default App;
