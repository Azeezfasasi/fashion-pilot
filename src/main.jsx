import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'rsuite/Button/styles/index.css';
import 'rsuite/dist/rsuite-no-reset.min.css';
// import { UserProvider } from './assets/context-api/user/UserProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <UserProvider> */}
        <App />
      {/* </UserProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
