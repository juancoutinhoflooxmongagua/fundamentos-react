import './index.css'
import './app.css'

import Contador from './components/contador/Contador'
import React from 'react'
import Card from './components/layout/card'
import Family from './components/basics/family'
import First from './components/basics/first'
import Parameters from './components/basics/parameters'
import Frags from './components/basics/frags'
import Random from './random'
import Repection from './components/basics/repection'
import Supermarket from './components/basics/supermarket'
import Parorimpar from './components/conditional/parorimpar'
import Userinfo from './components/conditional/userinfo'
import FatherDirection from './components/comunication/FatherDirection'
import SoonDirection from './components/comunication/SoonDirection'
import Input from './components/formulario/input'
import Mega from './components/megasena/Mega'
export default _ => (
    <div id="app">

        <Card>
            <Mega></Mega>
        </Card>

        <Card>
            <Contador initialNumber={99}></Contador>
        </Card>
        <Card>
            <Input></Input>
        </Card>
        <Card>
            <FatherDirection></FatherDirection>
        </Card>
        <Card>
            <Parorimpar numero={9} />
            <Userinfo usuario={{ nome: 'fernando', email: 'juan@gmail.com' }}></Userinfo>
        </Card>

        <Card titulo="Mercado">
            <Supermarket></Supermarket>
        </Card>

        <Card titulo="Repetição">
            <Repection></Repection>
        </Card>

        <Card titulo="Primeiro Componente">
            <First />
        </Card>

        <Card titulo="Family">
            <Family />
        </Card>

        <Card titulo="Parâmetros">
            <Parameters titulo="Eu sou o título" />
        </Card>
        <Card titulo="Frags">
            <Frags />
        </Card>
        <Card titulo="Aleatório">
            <Random />
        </Card>
    </div>
);
