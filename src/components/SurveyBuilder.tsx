import { useState } from "react";

import "./survey.css";

interface SurveyBuilderProps {
  handleSubmit: (surveyData: any) => void;
}

export const SurveyBuilder = ({ handleSubmit }: SurveyBuilderProps) => {
  const [surveyLabel, setSurveyLabel] = useState("");
  const [selectedType, setSelectedType] = useState("text");
  const [isRequired, setIsRequired] = useState(false);

  const [multiChoice, setMultiChoice] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

  const handleClick = () => {
    setMultiChoice((multiChoice) => [...multiChoice, currentQuestion]);
  };

  return (
    <div className="builder-container">
      <div className="question-text">
        <label>Question</label>
        <input
          value={surveyLabel}
          onChange={(e) => setSurveyLabel(e.target.value)}
        />
      </div>
      <div className="question-text">
        <label>Question Type</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="multipleChoice">Multiple Choice</option>
          <option value="dropdown">DropDown</option>
        </select>
      </div>

      {selectedType === "multipleChoice" && (
        <div className="multichoice">
          <input
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
          />
          <button onClick={handleClick}>Add</button>
          <ul>
            {multiChoice.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      )}

      <div className="question-text">
        <label>Required</label>
        <input
          type="checkbox"
          checked={isRequired}
          onChange={(e) => setIsRequired(e.target.checked)}
        />
      </div>

      <button
        onClick={() =>
          handleSubmit({
            label: surveyLabel,
            type: selectedType,
            required: isRequired,
            metaData: {
              multiChoice,
            },
          })
        }
      >
        Add Survey
      </button>
    </div>
  );
};
