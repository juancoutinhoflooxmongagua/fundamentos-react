import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import First from './components/basics/first.js'

const el = document.getElementById('root')
const root = createRoot(el)

const tag = <i>Hello World</i>

root.render(
    <h1>
        <First></First>
        <br></br>
        { tag }
    </h1>
)