import { useState } from 'react'
import Logo from '../../../assets/Logo.png'
import '../../ModulesCss/FirstPage/header.css'


function Header() {
  return (
    <>
       <div>
          <div className="container">
            <div id='header'>
                  <div id='logo'><img src={Logo} alt="Изображение" /></div>
                  <div className="buttons" id='buttons'>
                      <button id='sign'>Зарегистрироваться</button>
                      <button id='input'>Войти</button>
                  </div>
              </div>
          </div>
       </div>
    </>
  )
}

export default Header