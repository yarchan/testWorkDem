import { useState } from "react";

const App1 = () => {
  const [array, updateArray] = useState([3, 4, 5, 6]);

  const insertBefore = () => {
    array.unshift(1, 2);
    updateArray(array);
  };

  const inserAfter = () => {
    array.push(7, 8);
    updateArray(array);
  };

  const onUpdateArray = () => {
    insertBefore();
    inserAfter();
    console.log(array);
  };

  return (
    <div>
      <h2>Here is Array</h2>
      <div>
        {array.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <button
        type="button"
        onClick={onUpdateArray}
        style={{ marginTop: "10px" }}>
        Update Array
      </button>
    </div>
  );
};

export default App1;
