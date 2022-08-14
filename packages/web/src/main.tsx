import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'

const Home = () => <h1>Hello</h1>
const Home2= () => <h1>Hello2</h1>

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)