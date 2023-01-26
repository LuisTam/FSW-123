import React, { useState, useRef, useEffect }from 'react'

export default function Player({
    currentSong,
    currentIndex,
    nextSong,
    prevSong
}) {

  const btns = {
    backgroundColor: '',
    margin:'5px',
    width:'75px',
    height:'40px',
    borderRadius:'50px'
}

const h1={
    color:'lightBlue'
}
  const [isPlaying,setIsPlaying] = useState(false);
  const audioRef = useRef(null)
  const togglePlay = () => {
      setIsPlaying(!isPlaying)
  }

useEffect(() => {
    if(isPlaying){
        audioRef.current.play();
    }
    else{
        audioRef.current.pause();
    }
},[isPlaying, currentIndex])
  return (
      <div>
          <audio
           ref={audioRef}
           src={currentSong.music}
           >

          </audio>
          {currentSong ? (
            <div>
                <h1 style={h1}>{currentSong.name}</h1>
                <h3 style={h1}>Artist: {currentSong.artist}</h3>
            </div>
          ): (
            ""
          )}
          <button onClick={prevSong} style={btns}>Prev</button>  
          {isPlaying ? (
              <button onClick={togglePlay} style={btns}>Pause</button>
          ) : (
              <button onClick={togglePlay} style={btns}>Play</button>
          ) }
          <button onClick={nextSong} style={btns}>Next</button>
    </div>
  )
}
