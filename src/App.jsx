import React from 'react';
import CustomInputNumber from './CustomInputNumber/CustomInputNumber';
import RoomAllocation from './RoomAllocation/RoomAllocation';

import './App.css';

const App = () => {
  const handleInputChange = (e) => {
    console.log(e);
  };
  const handleInputBlur = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="app-container">
        <div style={{ flex: '1' }}>
          <h3>CustomInputNumber</h3>
          <p>range: -20 ~ 20, step 2</p>
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
        </div>
        <div style={{ flex: '2' }}>
          <h3>RoomAllocation</h3>
          <RoomAllocation
            guest={10}
            room={3}
            onChange={handleInputChange}
          ></RoomAllocation>
        </div>
      </div>
    </>
  );
};

export default App;
