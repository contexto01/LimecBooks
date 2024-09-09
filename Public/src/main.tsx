import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="absolute top-0 right-0 z-[-2] h-screen w-screen bg-white dark:bg-black bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    <App />
  </React.StrictMode>
)
