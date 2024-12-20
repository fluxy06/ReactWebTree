import { useRef, useState } from 'react';
import '../../ModulesCss/ModuleAuth/LoginForm.css';
import { useNavigate } from 'react-router-dom'; 

function CreateLoginForm({ onClose, isOpen }) {
  const loginRef = useRef(null); // Реф для поля логина
  const passwordRef = useRef(null); // Реф для поля пароля
  const [showPassword, setShowPassword] = useState(false); // Состояние для показа пароля
  const navigate = useNavigate(); // Инициализация useNavigate

  // Обработчик изменения состояния checkbox
  const ChangeVisible = () => {
    setShowPassword((visible) => !visible); // Инвертируем состояние
  };

  // Обработчик нажатия кнопки "Войти"
  const SignIn = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    const loginValue = loginRef.current.value; // Значение логина
    const passwordValue = passwordRef.current.value; // Значение пароля

    // Проверка длины логина
    if (loginValue.length < 3) {
      alert("Короткий логин!");
      return;
    }

    // Проверка длины пароля
    if (passwordValue.length < 5) {
      alert("Короткий пароль!");
      return;
    }

    // Если все проверки пройдены
    alert("Вход выполнен!");
    navigate('/load-web'); // Переход на страницу с LoadWeb
  };

  return (
    <div className={`form-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button> {/* Кнопка закрытия */}
        <h1 id='WelcomeText'>Добро пожаловать</h1>
        <form action="#">
          <div id='input-objects'>
            <input
              type="text"
              placeholder='Введите логин'
              id="Login"
              ref={loginRef} // Привязываем реф к полю логина
            />
            <input
              type={showPassword ? 'text' : 'password'} // Изменяем тип поля ввода
              placeholder='Введите пароль'
              id="Password"
              ref={passwordRef} // Привязываем реф к полю пароля
            />
            <div className="hide-pass">
              <input
                type="checkbox"
                id="HidePass"
                checked={showPassword} // Устанавливаем состояние checkbox
                onChange={ChangeVisible} // Обработчик изменения
              />
              <p id='CheckText'>Показать пароль</p>
            </div>
          </div>
          <div id='button-objects'>
            <button id='INT' onClick={SignIn}>Войти</button>
            <p id='RegistrBut' onClick={() => alert("Щас зарегаемся, не кипишуй")}>
              Нет учетной записи? Жми сюда
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateLoginForm;