import { useRef, useState } from 'react';
import '../../ModulesCss/ModuleAuth/RegistrForm.css';

function CreateRegistrForm({ onClose, isOpen }) {
  const [showPassword, setShowPassword] = useState(false); // Состояние для показа пароля

  const Log = useRef(null); // Реф для логина
  const Pass = useRef(null); // Реф для пароля
  const DoublePass = useRef(null); // Реф для повторного пароля

  // Обработчик изменения состояния checkbox
  const handleCheckboxChange = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // Инвертируем состояние
  };

  const SignIn = () => {
    const loginValue = Log.current.value; // Значение логина
    const passwordValue = Pass.current.value; // Значение пароля
    const repeatPasswordValue = DoublePass.current.value; // Значение повторного пароля

    if (loginValue.length < 3) {
      alert("Короткий логин!");
      return;
    } else if (passwordValue.length < 5) {
      alert("Короткий пароль!");
      return;
    } else if (repeatPasswordValue !== passwordValue) {
      alert("Пароли не совпадают!");
      return;
    } else {
      alert("Регистрация успешна!");
    }
  };

  return (
    <div className={`form-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button> {/* Кнопка закрытия */}
        <h1 id='WelcomeText'>Добро пожаловать</h1>
        <form action="#">
          <div id='input-objects'>
            <input type="text" placeholder='Введите логин' id="Login" ref={Log} />
            <input
              type={showPassword ? 'text' : 'password'} // Изменяем тип поля ввода
              placeholder='Введите пароль'
              id="Password"
              ref={Pass}
            />
            <input
              type={showPassword ? 'text' : 'password'} // Изменяем тип поля ввода
              placeholder='Повторите пароль'
              id='RepeatPassword'
              ref={DoublePass}
            />
            <div className="hide-pass">
              <input
                type="checkbox"
                id="HidePass"
                checked={showPassword} // Устанавливаем состояние checkbox
                onChange={handleCheckboxChange} // Обработчик изменения
              />
              <p id='CheckText'>Показать пароль</p>
            </div>
          </div>
          <div id='button-objects'>
            <button id='INT' onClick={SignIn}>Зарегистрироваться</button>
            <p id='RegistrBut' onClick={() => alert("Щас зарегаемся, не кипишуй")}>
              Нет учетной записи? Жми сюда
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRegistrForm;