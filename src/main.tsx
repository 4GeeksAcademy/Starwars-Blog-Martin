import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesWrapper } from './components/favoritesContext'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <FavoritesWrapper>
        <BrowserRouter>
      <App />
    </BrowserRouter>
   </FavoritesWrapper>
     </React.StrictMode>,
)
