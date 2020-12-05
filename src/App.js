import { useState } from "react";

// Styles
import "./styles/app.scss";

// Song objects
import data from "./utils";

// Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

const App = () => {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
};

export default App;
