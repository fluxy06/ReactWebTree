import { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import '../../ModulesCss/FirstPage/header.css';
import CreateLoginForm from '../../../Modules/Models/ModuleAuth/LoginForm';

function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false); // Состояние для управления видимостью формы

  const OnClickINT = () => {
    setShowLoginForm(true); // Показываем форму при клике
  };

  const handleCloseForm = () => {
    setShowLoginForm(false); // Скрываем форму
  };

  return (
    <>
      <div>
        <div className="container">
          <div id='header'>
            <div id='logo'>
              <img src={Logo} alt="Изображение" />
            </div>
            <div className="buttons" id='buttons'>
              <button id='sign'>Зарегистрироваться</button>
              <button id='input' onClick={OnClickINT}>Войти</button> {/* Убрали скобки */}
            </div>
          </div>
        </div>
      </div>
      {showLoginForm && <CreateLoginForm isOpen={showLoginForm} onClose={handleCloseForm} />} {/* Передаем состояние и функцию закрытия */}
    </>
  );
}

export default Header;