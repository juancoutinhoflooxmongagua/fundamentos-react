import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'
import First from './components/basics/first'
import Parameters from './components/basics/parameters'

const el = document.getElementById('root')
const root = createRoot(el)

const tag = <i>Hello World</i>

root.render(
    <div id="app">
        <h1>
            <First />
            <br />
            <Parameters titulo="Eu sou o titulo" />
            {tag}
        </h1>
    </div>
)
