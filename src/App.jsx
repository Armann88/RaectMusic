import React, { useEffect, useState } from "react";
import SongList from "./component/songlist/SongList";


function App() {
return(
  <>
  <SongList/>
  </>
  );
}

export default App;



// import React, { useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const playMusic = () => {
//     const audioFilePath = process.env.PUBLIC_URL + '/Brunette_-_Brunette_-_Bac_kapuyt_achqerd_74848137.mp3';
//     const audio = new Audio(audioFilePath);

//     // If audio is playing, stop it before playing a new one
//     if (isPlaying) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       setIsPlaying(false);
//     } else {
//       // Play the audio
//       audio.play();
//       setIsPlaying(true);
//     }

//     // Set the audio element reference for stopping
//     audioRef.current = audio;
//   };

//   const stopMusic = () => {
//     // Stop the currently playing audio
//     if (audioRef.current) {
//       audioRef.current.pause();
//       audioRef.current.currentTime = 0;
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Music Player</h1>
//       <button onClick={playMusic}>Play Music</button>
//       <button onClick={playMusic}>{isPlaying ? 'Pause' : 'Play'}</button>
//       <button onClick={stopMusic}>Stop</button>
//     </div>
//   );
// }

// export default App;