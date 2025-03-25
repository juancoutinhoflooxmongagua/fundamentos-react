import { createRoot } from 'react-dom/client'
import React from 'react'

const el = document.getElementById('root')
const root = createRoot(el)

const tag =      <i>Hello World</i>

root.render(
    <h1>
        { tag }
    </h1>
)