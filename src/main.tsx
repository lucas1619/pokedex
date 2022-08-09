import React from 'react'

import ReactDOM from 'react-dom/client'

import { 
  BrowserRouter, 
  Routes,
  Route, 
} from "react-router-dom";


import '@/index.css'
import Main from '@pages/Main';
import Detail from '@pages/Detail';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
)
