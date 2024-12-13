import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import '../../ModulesCss/FirstPage/header.css';
import CreateLoginForm from '../../../Modules/Models/ModuleAuth/LoginForm';
import CreateRegistrForm from '../../../Modules/Models/ModuleAuth/RegistrForm.jsx'

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false); // Состояние для управления видимостью формы

  const OnClickINT = () => {
    setShowLoginForm(true); // Показываем форму при клике
  };

  const handleCloseForm = () => {
    setShowLoginForm(false); // Скрываем форму
  };

  const [showRegForm, setShowRegForm] = useState(false);

  const OnRegCLick = () => {
    setShowRegForm(true);
  }

  const CloseReg = () => {
    setShowRegForm(false);
  }

  return (
    <>
      <div>
        <div className="container">
          <div id='header'>
            <div id='logo'>
              <img src={Logo} alt="Изображение" />
            </div>
            <div className="buttons" id='buttons'>
              <button id='sign' onClick={OnRegCLick}>Зарегистрироваться</button>
              <button id='input' onClick={OnClickINT}>Войти</button> {/* Убрали скобки */}
            </div>
          </div>
        </div>
      </div>
      {showLoginForm && <CreateLoginForm isOpen={showLoginForm} onClose={handleCloseForm} />}
      {showRegForm && <CreateRegistrForm isOpen={showRegForm} onClose={CloseReg} />}  {/* Передаем состояние и функцию закрытия */}
    </>
  );
}

export default Header;