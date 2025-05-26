import "./styles/theme.css";
import "./styles/global.css";

import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultImput';
import { Cycles } from './components/Cycles';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form action="" className='form'>
          <div className='formRow'>
            <DefaultInput id="meuInput" labelText='Task' type="text" title='Título' placeholder='Digite algo' defaultValue='Valor Preenchido' />
          </div>
          
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores.</p>
          </div>
          
          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formrow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
