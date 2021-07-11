import './App.css';

import Title from './components/Title'
import Senha from './components/Senha'
import { ButtonTop } from './styles'

import { useState } from 'react';




const App = () => {

  const [ senha, setSenha ] = useState('01');

  const handleAddSenha = () => {
    const newSenha = parseInt(senha) + 1;
    newSenha < 10 ? setSenha('0' + newSenha.toString(10)) : setSenha(newSenha)
  
  }

  const handleResetSenha = () => {
    const newSenha = '01';
    setSenha(newSenha)
  }

  const handleDecreaseSenha = () => {
    const newSenha = parseInt(senha) - 1;
    if(newSenha > 9) {
      setSenha(newSenha)
    }
    else if(newSenha > 0) { 
      setSenha('0' + newSenha.toString(10))
    }
    else{
      setSenha(senha)
    }
  
  }

  return (
    <div className="center">
      <div className="container">
        <Title />
        <Senha>{senha}</Senha>
        <div className="buttons">
          <ButtonTop color="red" onClick={handleDecreaseSenha}>Voltar</ButtonTop>
          <ButtonTop color="green" onClick={handleAddSenha}>Seguinte</ButtonTop>
        </div>
        <ButtonTop color="blue" onClick={handleResetSenha}>Resetar</ButtonTop>
      </div>

    </div>
  );
}

export default App;
