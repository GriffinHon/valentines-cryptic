import React, { useState, useRef } from 'react';
import InputBoxes from './InputBoxes';
import Confetti from 'react-confetti';

const GamePage = () => {
    const [answer, setAnswer] = useState([['', '', '', ''], ['', '', '', '', '', '']]); // 4 letters + 6 letters
    const [isCorrect, setIsCorrect] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [hasWon, setHasWon] = useState(false);
    const audioRef = useRef(null); // Ref for the audio element
  
    const clue = "Will you be my? (4,6)";
    const correctAnswer = ["MEGA", "GENIUS"];
  
    const handleCheckAnswer = () => {
      const userAnswer = answer.map(line => line.join('')).join(' ');
      if (userAnswer.toUpperCase() === correctAnswer.join(' ')) {
        setHasWon(true);
        if (audioRef.current) {
          audioRef.current.play(); // Play the song when the player wins
        }
      }
    };
  
    return (
      <div className="game-page">
        {/* White strip for the clue */}
        <div className="clue-strip">
          <h2>Today's Clue:</h2>
          <p className="clue">{clue}</p>
        </div>
        {/* Rest of the game content */}
        <div className="game-content">
          {hasWon ? (
            <>
              <Confetti /> {/* Confetti effect */}
              <div className="win-box">
                <h3 className="win-title">You got it!</h3>
                <p className="win-message">I love you Anika</p>
                <img
                  src="/nosotros.jpg" // Replace with the path to your photo
                  alt="You and your girlfriend"
                  className="win-photo"
                />
              </div>
              {/* Audio element */}
              <audio ref={audioRef} src="/win-song.mp3" />
            </>
          ) : (
            <>
              <InputBoxes answer={answer} setAnswer={setAnswer} />
              <div className="buttons">
                <button onClick={() => setShowHint(!showHint)}>
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>
                <button onClick={handleCheckAnswer}>Check Answer</button>
              </div>
              {showHint && <p className="hint">Hint: It's how I describe you every day.</p>}
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default GamePage;