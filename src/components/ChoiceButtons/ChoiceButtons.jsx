import React, { useState } from 'react';
import { infos } from "./info";
import './ChoiceButtons.css';

export const ChoiceButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const toggleInfo = (buttonId) => {
    setActiveButton(activeButton === buttonId ? null : buttonId);
  };

  return (
    <div className="choice__buttons">
      {infos.map((info) => (
        <div key={info.id} className='information'>
          <div className="choice__button">
            <h2 className="choice-title" id={`title-${info.id}`} onClick={() => toggleInfo(info.id)}>
              {info.title}
            </h2>
          </div>
          <div className={`info info-${info.id} ${activeButton === info.id ? 'active' : ''}`}>
            <p className="info-p">
              {info.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};