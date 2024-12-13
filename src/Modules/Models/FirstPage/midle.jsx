import { useState } from 'react';
import '../../ModulesCss/FirstPage/midle.css';
import InfoBox from '../../../assets/Logo.png';
import CreateRegistrForm from '../../../Modules/Models/ModuleAuth/RegistrForm.jsx'

function PreText({ text, secondary }) {
  return (
    <div>
      <h1 id="head-text">{text}</h1>
      <p id="pre-text">{secondary}</p>
    </div>
  );
}

function Midle() {
  const [showRegForm, setShowRegForm] = useState(false);

  const OnRegCLick = () => {
    setShowRegForm(true);
  }

  const CloseReg = () => {
    setShowRegForm(false);
  }
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
            <button id='startLearn' onClick={OnRegCLick}>Начать обучение </button>
          </div>
      </div>
      {showRegForm && <CreateRegistrForm isOpen={showRegForm} onClose={CloseReg} />}
    </div>
    
  );
}

export default Midle;