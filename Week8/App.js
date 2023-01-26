import{useState} from 'react';
import {audioData} from "./audioData";
import AudioFiles from "./AudioFiles";
import Player from './Player';


function App() {
  const player1 = {
    textAlign:'center',
    fontSize:'x-large',
    margin: '100px',
    backgroundColor: 'black',
    width:'auto',
    borderRadius:'100px'
  }

  const [songs, setSongs] = useState(audioData);
  const [currentIndex, setCurrentIndex] = useState(null)
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentIndex(index)
    setCurrentSong(song)
  }
  const nextSong = () => {
    setCurrentIndex(currentIndex + 1)
    setCurrentSong(audioData[currentIndex + 1])
  }
  
  const prevSong = () => {
    setCurrentIndex(currentIndex - 1)
    setCurrentSong(audioData[currentIndex - 1])
  }
  return (
    <>
    <div className='player' style={player1}>
      <Player 
      currentSong = {currentSong}
      currentIndex = {currentIndex}
      nextSong = {nextSong}
      prevSong = {prevSong}
      />
    </div>
    </>
  );
}

export default App;
 