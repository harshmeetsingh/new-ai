import { SurveyDataType } from "../survey.types";
import { SurveyTypeComponent } from "./SurveyTypeComponent";

import "./survey.css";

export const SurveyRenderer = ({
  surveysList,
}: {
  surveysList: SurveyDataType[];
}) => {
  return (
    <div>
      {surveysList.map((item) => {
        return (
          <div key={item.label}>
            <div className="type-component-container">
              {item.label} <span style={{ color: "red" }}>*</span>
              <SurveyTypeComponent type={item.type} metaData={item.metaData} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
