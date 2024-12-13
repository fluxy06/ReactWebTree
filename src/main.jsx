import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Modules/Models/FirstPage/header.jsx'
import Midle from './Modules/Models/FirstPage/midle.jsx'
import UnderFLoor from './Modules/Models/FirstPage/underfloor.jsx'
import CreateLoginForm from './Modules/Models/ModuleAuth/LoginForm.jsx'
import CreateRegistrForm from './Modules/Models/ModuleAuth/LoginForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Midle />
    <UnderFLoor />
  </StrictMode>,
)