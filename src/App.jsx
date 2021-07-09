import './App.css';

import Title from './components/Title'
import Senha from './components/Senha'
import { ButtonTop } from './styles'


const App = () => {
  return (
    <div className="center">
      <div className="container">
        <Title />
        <Senha />
        <div className="buttons">
          <ButtonTop color="red">Voltar</ButtonTop>
          <ButtonTop color="green">Seguinte</ButtonTop>
        </div>
      </div>

    </div>
  );
}

export default App;
