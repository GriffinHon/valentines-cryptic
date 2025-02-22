import React, { useRef } from 'react';

const InputBoxes = ({ answer, setAnswer }) => {
  const inputRefs = useRef([]);

  const handleInputChange = (lineIndex, boxIndex, event) => {
    const newAnswer = [...answer];
    newAnswer[lineIndex][boxIndex] = event.target.value.toUpperCase();
    setAnswer(newAnswer);

    // Move to the next box if a letter is typed
    if (event.target.value && boxIndex < inputRefs.current[lineIndex].length - 1) {
      inputRefs.current[lineIndex][boxIndex + 1].focus();
    }
  };

  const handleBackspace = (lineIndex, boxIndex, event) => {
    if (event.key === 'Backspace' && !event.target.value && boxIndex > 0) {
      // Move to the previous box on backspace
      inputRefs.current[lineIndex][boxIndex - 1].focus();
    }
  };

  return (
    <div className="input-boxes">
      {/* First line (4 letters) */}
      <div className="input-line">
        {[...Array(4)].map((_, boxIndex) => (
          <input
            key={boxIndex}
            type="text"
            maxLength="1"
            value={answer[0][boxIndex] || ''}
            onChange={(e) => handleInputChange(0, boxIndex, e)}
            onKeyDown={(e) => handleBackspace(0, boxIndex, e)}
            ref={(el) => (inputRefs.current[0] = inputRefs.current[0] || [], inputRefs.current[0][boxIndex] = el)}
            className={boxIndex === answer[0].length ? 'active' : ''}
          />
        ))}
      </div>
      {/* Second line (6 letters) */}
      <div className="input-line">
        {[...Array(6)].map((_, boxIndex) => (
          <input
            key={boxIndex}
            type="text"
            maxLength="1"
            value={answer[1][boxIndex] || ''}
            onChange={(e) => handleInputChange(1, boxIndex, e)}
            onKeyDown={(e) => handleBackspace(1, boxIndex, e)}
            ref={(el) => (inputRefs.current[1] = inputRefs.current[1] || [], inputRefs.current[1][boxIndex] = el)}
            className={boxIndex === answer[1].length ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default InputBoxes;