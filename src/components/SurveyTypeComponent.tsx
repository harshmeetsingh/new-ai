export const SurveyTypeComponent = ({
  type,
  metaData,
}: {
  type: string;
  metaData: any;
}) => {
  switch (type) {
    case "text":
      return <input type="text" />;
    case "number":
      return <input type="number" />;
    case "multipleChoice":
      return (
        <div>
          {(metaData?.multiChoice || []).map((item: string) => {
            return (
              <div key={item}>
                <label>{item}</label> <input type="checkbox" />
              </div>
            );
          })}
        </div>
      );
    case "dropdown":
      return (
        <div>
          <select>
            <option value="Satisfied">Satisfied</option>
            <option value="NotSatisfied">Not Satisfied</option>
          </select>
        </div>
      );
  }
};
