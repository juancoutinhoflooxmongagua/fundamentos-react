import './index.css'
import React from 'react'
import First from './components/basics/first'
import Parameters from './components/basics/parameters'
import Frags from './components/basics/frags'
import Random from './random'

export default _ =>

    <div id="app">
        <h1>
            <First />
            <br />
            <Parameters titulo="Eu sou o titulo" />
            <Frags></Frags>
            <Random></Random>
        </h1>
    </div>
