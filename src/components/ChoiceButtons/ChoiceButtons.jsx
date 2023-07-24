import React, { useState } from 'react';
import { buttons } from './buttons';
import './ChoiceButtons.css';

export const ChoiceButtons = () => {
  const [activeButtons, setActiveButton] = useState(false);
  const activeBtns = [];

  const toggleButton = (buttonId) => {
    setActiveButton(activeButtons === buttonId ? false : buttonId);

    const block = document.querySelector('.choice__block');
    const appearingBlock = document.querySelector('.appearing__info');
    const info = document.querySelector(`.info-${buttonId}`);

    if (activeButtons == buttonId) {
  
      block.style.height = '800px';
      appearingBlock.style.display = 'flex'
      appearingBlock.style.opacity = '1'
      info.style.display = 'flex'
      info.style.opacity = '1'
    } else {
      block.style.height = '185px';
      appearingBlock.style.display = 'none'
      appearingBlock.style.opacity = '0'
      info.style.display = 'none'
      info.style.opacity = '0'
    }

  };

  return (
    <div className="choice__buttons">
      {
        buttons.map(button => {
          return (
            <div key={button.id} className="choice__button">
              <button className="choice-btn" onClick={() => toggleButton(button.id)}>
                <img src={button.icon} />
              </button>
              <h2 className="choice-title" id="title-1">{button.title}</h2>
            </div>
          )
        })
      }
    </div>
  )
}