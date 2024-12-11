import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Modules/Models/FirstPage/header.jsx'
import Midle from './Modules/Models/FirstPage/midle.jsx'
import UnderFLoor from './Modules/Models/FirstPage/underfloor.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Midle />
    <UnderFLoor />
  </StrictMode>,
)
