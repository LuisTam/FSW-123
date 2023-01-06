import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [search, setSearch] = useState("soccer");
  const [gif, setGif] = useState([])

  const API = 'U3fU4Za82ny0ma5pjPw3EWvzPrrpZGGX'
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`
  const newEndpoint = `https://api.giphy.com/v1/gifs/search?q=messi&api_key=U3fU4Za82ny0ma5pjPw3EWvzPrrpZGGX`

  
  /*useEffect(()=>{
    const getGif = async() => {
      await axios.get(url)
      .then((response)=> console.log(response)) //setGif(response.data.data[0].url))
      //.then((response)=> console.log(response.data.data[0].url))
      .catch((error) => console.log(error))
    }
    getGif()
  },[])
*/
console.log(gif)
  useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${API}`)
    .then((response)=> console.log(response))
    .then((data) => setSearch(data.image))
    .catch((error) => console.log(error))
  },[]);
  
  
  const getImage = () => {
    fetch(url)
    .then((response) => console.log(response.data))
    //.then((data) => setSearch(data.image))
    //.catch((error) => console.log(error))
  }

  const handleSearch = () => {
    getImage()
   
  }
  return (
    <>
    <header>
    <h1>ENTER A WORD:</h1>
   <input type="text" value={search}></input>
   <button type='submit' onClick={handleSearch}>Search</button>
   </header>
   </>
  );
}

export default App;
