import React, { useEffect, useState } from 'react';
import CustomInputNumber from '../CustomInputNumber/CustomInputNumber';

import './Room.css';

function Room({ id = 0, max = 4, disabled, onChange = () => {} }) {
  const [remain, setRemain] = useState(max - 1);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);

  useEffect(() => {
    onChange({ id, adult, child });
  }, [remain]);

  const handleInputChange = (e) => {
    if (e.name.includes('adult')) {
      setAdult(e.value);
      setRemain(max - e.value - child);
    }
    if (e.name.includes('child')) {
      setChild(e.value);
      setRemain(max - e.value - adult);
    }
  };

  return (
    <div>
      <h2>房間：{adult + child} 人</h2>
      <div>
        <div className="room-row">
          <div>
            <span style={{ display: 'block' }}>大人</span>
            <span className="room-note">年齡 20+</span>
          </div>
          <div>
            <CustomInputNumber
              min={1}
              max={max - child}
              step={1}
              name={`${id}-adult`}
              value={1}
              disabled={disabled}
              onChange={handleInputChange}
            ></CustomInputNumber>
          </div>
        </div>
        <div className="room-row">
          <span>小孩</span>
          <div>
            <CustomInputNumber
              min={0}
              max={max - adult}
              step={1}
              name={`${id}-child`}
              value={0}
              disabled={disabled}
              onChange={handleInputChange}
            ></CustomInputNumber>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
