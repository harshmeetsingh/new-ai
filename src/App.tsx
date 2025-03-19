import { useState } from "react";
import "./App.css";
import { SurveyBuilder } from "./components/SurveyBuilder";
import { SurveyDataType } from "./survey.types";
import { SurveyRenderer } from "./components/SurveyRenderer";

function App() {
  const [surveysList, setSurveysList] = useState<SurveyDataType[]>([]);

  const handleSubmit = (surveyData: SurveyDataType) => {
    setSurveysList((items) => [...items, surveyData]);
  };

  return (
    <>
      <div className="survey-container">
        <SurveyBuilder handleSubmit={handleSubmit} />
        <SurveyRenderer surveysList={surveysList} />
      </div>
    </>
  );
}

export default App;
