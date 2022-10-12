import { useEffect, useState } from "react";

export default function AudioPlay() {
  const [musicArray] = useState([
    "https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba-online-audio-converter.com_-1.wav",
    "https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const musicData = musicArray.map((sound) => {
      return { audio: new Audio(sound), play: false };
    });

    setData(musicData);
  }, [musicArray]);

  const playSound = (index) => {
    setData((arr) =>
      arr.map((sound, i) => {
        if (i === index) {
          sound.audio.play();
          return { ...sound, play: true };
        }
        sound.audio.pause();
        return { ...sound, play: false };
      })
    );
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const stopSound = (index) => {
    setData((arr) =>
      arr.map((sound, i) => {
        if (i === index) {
          sound.audio.pause();
          return { ...sound, play: false };
        }
        return { ...sound, play: false };
      })
    );
  };

  return (
    <div className="App">
      {data.map((sound, i) => {
        return (
          <>
            {sound.play ? (
              <button onClick={() => stopSound(i)}>pause</button>
            ) : (
              <button onClick={() => playSound(i)}>play</button>
            )}
          </>
        );
      })}

      <h2>PLAY</h2>
    </div>
  );
}
