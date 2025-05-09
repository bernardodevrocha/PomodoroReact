import "./styles/theme.css";
import "./styles/global.css";

import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown'

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
            <label htmlFor="input">Task</label>
            <input id='input' type="text" />
          </div>
          
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolores.</p>
          </div>
          
          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
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
