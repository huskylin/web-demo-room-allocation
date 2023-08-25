import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { KEYCODE } from '../utils/keycode';

import './CustomInputNumber.css';

function CustomInputNumber({
  min = -Infinity,
  max = Infinity,
  step = 1,
  name = 'inputNumber',
  value = 0,
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
}) {
  const [number, setNumber] = useState(value);

  const add = () => {
    setNumber((pre) => {
      if (pre + step > max) return max;
      if (pre + step < min) return min;
      return pre + step;
    });
  };

  const minus = () => {
    setNumber((pre) => {
      if (pre - step > max) return max;
      if (pre - step < min) return min;
      return pre - step;
    });
  };

  const handleMinusPress = (e) => {
    if (disabled) return;
    if (e.button === 0) {
      const startTime = new Date().getTime();
      const timer = setInterval(() => {
        const now = new Date().getTime();
        if (now - startTime > 500) {
          minus();
        }
      }, 100);
      document.addEventListener('mouseup', () => clearInterval(timer));
    }
  };

  const handlePlusPress = (e) => {
    if (disabled) return;
    if (e.button === 0) {
      const startTime = new Date().getTime();
      const timer = setInterval(() => {
        const now = new Date().getTime();
        if (now - startTime > 500) {
          add();
        }
      }, 100);
      document.addEventListener('mouseup', () => clearInterval(timer));
    }
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    if (e.code === KEYCODE.LEFT) {
      minus();
      e.preventDefault();
    } else if (e.code === KEYCODE.RIGHT) {
      add(e);
      e.preventDefault();
    }
  };

  const handleWrapperBlur = (e) => {
    const isInWrapper = e.currentTarget.contains(e.relatedTarget);
    if (!isInWrapper) {
      onBlur?.(e);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.code === KEYCODE.DELETE || e.code === KEYCODE.BACKSPACE) {
      setNumber(value);
    }
  };

  const handleValueChange = (e) => {
    const value = e.target.value;
    if (Number(value) && value >= min && value <= max) {
      setNumber(Number(value));
      onChange(e);
    }
  };

  return (
    <>
      <div
        className="input-wrapper"
        onBlur={handleWrapperBlur}
        onKeyDown={handleKeyDown}
      >
        <button
          id="minus"
          className="border-item button-style primary-color"
          onClick={() => !disabled && minus()}
          onMouseDown={handleMinusPress}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input
          className="border-item input-color"
          type="text"
          name={name}
          value={number}
          min={min}
          max={max}
          step={step}
          onChange={handleValueChange}
          disabled={disabled}
          onKeyDown={handleInputKeyDown}
        ></input>
        <button
          id="plus"
          className="border-item button-style primary-color"
          onClick={() => !disabled && add()}
          onMouseDown={handlePlusPress}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
}

export default CustomInputNumber;
