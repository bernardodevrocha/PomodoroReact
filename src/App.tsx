import { Heading } from './components/Heading';

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("Oi");

  return (
    <>
      <Heading attr={123} attr2="String Qualquer">Olá Mundo1</Heading>
      <Heading>Olá Mundo2</Heading>
      <Heading>Olá Mundo3</Heading>
      <Heading>Olá Mundo4</Heading>
      <Heading>Olá Mundo5</Heading>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum eligendi error, totam quidem eos quam?</p>
    </>
  );
}

export default App;
