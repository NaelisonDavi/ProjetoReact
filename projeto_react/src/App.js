import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import React, { Component }  from 'react'
import Evento from './components/Evento'
import Form from './components/Form'



function App() {
  const url = 'https://png.pngtree.com/png-clipart/20220206/original/pngtree-helloboy-png-image_7263636.png'

  return (
    <div className="App">
      <h1>Olá Leitor!</h1>
      <SayMyName nome="Davi Oliveira" />
      <img src={url} alt="Imagem olá"/>
      <Pessoa 
        nome="Davi Oliveira"
        idade="25"
        profissao="desenvolvedor"
        foto="https://via.placeholder.com/150"/>
      <Frase />
      <List />
      <Evento numero='1' />
      <Evento numero='2' />
      <Form />
    </div>
  );
}

export default App;
