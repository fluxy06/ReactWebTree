import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// Импортируем компоненты
import Header from './Modules/Models/FirstPage/header.jsx'
import Midle from './Modules/Models/FirstPage/midle.jsx'
import UnderFLoor from './Modules/Models/FirstPage/underfloor.jsx'
import CreateLoginForm from './Modules/Models/ModuleAuth/LoginForm.jsx'
import CreateRegistrForm from './Modules/Models/ModuleAuth/RegistrForm.jsx'
import BlockCource from './Modules/Models/ObjectsCource/BlockSource.jsx';
import LoadWeb from './Modules/Models/SecondPage/MainWeb.jsx'; // Исправленный путь

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Основная страница */}
        <Route path="/" element={
          <>
            <Header />
            <Midle />
            <UnderFLoor />
          </>
        } />

        {/* Страница с формой авторизации */}
        <Route path="/login" element={<CreateLoginForm isOpen={true} onClose={() => {}} />} />

        {/* Страница с формой регистрации */}
        <Route path="/register" element={<CreateRegistrForm isOpen={true} onClose={() => {}} />} />

        {/* Страница с компонентом LoadWeb */}
        <Route path="/load-web" element={<LoadWeb />} />

        {/* Пример маршрута для блока курсов */}
        <Route path="/courses" element={<BlockCource />} />
      </Routes>
    </Router>
  </StrictMode>,
);