import React from "react";
import  {audioData} from "./audioData";
import { useReducer } from "react";

 const initialState ={
   //songs: audioData,
   current: audioData[0]
   
}
export default function Player(){
    
    const reducer = (state, action) => {
        console.log(state.current)
        switch(action.type){
            case 'playSong':
              return{
                    current: new Audio(state.current.music).play()
                }
                case "pauseSong":
                return{
                    current: state.current.music.pause()
                    };
            case 'nextSong':
                return{
                    current: new Audio(audioData[1].music).play()
                };
            case 'prevSong':
                return{

                };
        };
        
    }
     const [state, dispatch] = useReducer(reducer,initialState)

      
    return(<>
        <h1>Music Player</h1>
        <h1>{state.current.name}</h1>
        <button onClick={() => dispatch({type: 'prevSong'})}>Previous</button>
        <button onClick={() => dispatch({type: 'playSong'})}>Play</button>
        <button onClick={() => dispatch({type: 'pauseSong'})}>Pause</button>
        <button onClick={() => dispatch({type: 'nextSong'})}>Next</button>
      </>)
}






/*export default function Player(){

    function prevSong(){

    }

    function playSong(){
        console.log(audioData[0].music)
        const audio = new Audio(audioData[0].music);
        audio.play();
       
    }
    
    function pauseSong(){
        //const pauseAudio = new Audio(audioData[0].music)
        //pauseAudio.pause();
    }

    function nextSong(){
        
    }
    return(
        <>
      <h1>Music Player</h1>
      <h1>{audioData[0].name}</h1>
      <button>Previous</button>
      <button onClick={playSong}>Play</button>
      <button onClick={pauseSong}>Pause</button>
      <button>Next</button>
    </>
    )
}
*/