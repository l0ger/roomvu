import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ThemeManager } from '../../utils/themeManager';
import { Theme } from '../../types';

const StyledToggle = styled.div`
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    bottom: -1px;
    left: -1px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0 5px 1px rgba(255, 202, 219, 0.75);
    -webkit-box-shadow: 0 0 5px 1px rgba(255, 202, 219, 0.75);
    -moz-box-shadow: 0 0 5px 1px rgba(255, 202, 219, 0.75);
    z-index: 1001;
  }

  input:checked + .slider {
    background-color: #0b0b0b;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #0b0b0b;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .dark,
  .light {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 4px;
    z-index: 1000;
  }

  .light {
    right: 4px;
  }

  .dark {
    left: 4px;
  }
`;

type Mode = Theme;
interface ToggleProps {
  defaultMode?: Mode;
  onChange?: (mode: Mode) => void;
}
const Toggle: FC<ToggleProps> = ({ defaultMode, onChange }) => {
  const [mode, setMode] = useState<Mode>(defaultMode || 'light');
  const onChangeHandler = () => {
    setMode(prev => {
      const newMode = prev === 'dark' ? 'light' : 'dark';
      onChange && onChange(newMode);
      ThemeManager.saveTheme(newMode);
      ThemeManager.changeTheme(newMode);
      return newMode;
    });
  };
  useEffect(() => {
    setMode(ThemeManager.getTheme() as Theme);
  }, []);

  return (
    <StyledToggle>
      <label className="switch">
        <input
          type="checkbox"
          onChange={onChangeHandler}
          checked={mode === 'light'}
        />
        <span className="slider round" />
        <img className={'light'} src={'/icons/dark.png'} alt={'dark theme'} />
        <img className={'dark'} src={'/icons/light.png'} alt={'light theme'} />
      </label>
    </StyledToggle>
  );
};

export default Toggle;
