import '../../ModulesCss/ModuleAuth/LoginForm.css';

function CreateLoginForm({ onClose, isOpen }) {
  return (
    <div className={`form-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="form" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button> {/* Кнопка закрытия */}
        <h1 id='WelcomeText'>Добро пожаловать</h1>
        <form action="#">
          <div id='input-objects'>
            <input type="text" placeholder='Введите логин' id="Login" />
            <input type="password" placeholder='Введите пароль' id="Password" />
            <div className="hide-pass">
                <input type="checkbox" id="HidePass" />
                <p id='CheckText'>Показать пароль</p>
            </div>
          </div>
          <div id='button-objects'>
            <button id='INT'>Войти</button>
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