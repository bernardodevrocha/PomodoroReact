import "./styles/theme.css";
import "./styles/global.css";

import { Container } from './components/Container/index';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
    </>
  );
}

export default App;
