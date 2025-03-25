import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './app'
const el = document.getElementById('root')
const root = createRoot(el)


root.render(
    <App />
)
