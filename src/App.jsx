import React from 'react';
import CustomInputNumber from './CustomInputNumber/CustomInputNumber';

const App = () => {
  const handleInputChange = (e) => {
    console.log(e);
  };
  const handleInputBlur = (e) => {
    console.log(e);
  };
  return (
    <>
      <p>step 2</p>
      <div>
        <CustomInputNumber
          min={-20}
          max={20}
          step={2}
          name="myInput"
          value={0}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          disabled={false}
        />
        <p>disabled</p>
        <CustomInputNumber
          min={0}
          max={10}
          step={1}
          name="myInput2"
          value={0}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          disabled={true}
        />
      </div>
    </>
  );
};

export default App;
