import './index.css'

import React from 'react'
import Card from './components/layout/card'
import First from './components/basics/first'
import Parameters from './components/basics/parameters'
import Frags from './components/basics/frags'
import Random from './random'

export default _ =>

    <div id="app">
        <h1>
            <Card></Card>
            <First />
            <br />
            <Parameters titulo="Eu sou o titulo" />
            <Frags></Frags>
            <Random></Random>
        </h1>
    </div>
