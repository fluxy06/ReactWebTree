import { useState } from 'react';
import '../../ModulesCss/FirstPage/midle.css';
import InfoBox from '../../../assets/Logo.png';

function PreText({ text, secondary }) {
  return (
    <div>
      <h1 id="head-text">{text}</h1>
      <p id="pre-text">{secondary}</p>
    </div>
  );
}

function Midle() {
  return (
    <div id="cont-mid">
      <div id="mid">
          <div className="text">
          <PreText
            text="Платформа для тех, кто хочет что-то изменить в своей жизни"
            secondary="Возможность обучаться новейшим технологиям совершенно бесплатно"
          />
          </div>
          <div id='form-group'>
            <button id='startLearn'>Начать обучение </button>
          </div>
      </div>
    </div>
  );
}

export default Midle;