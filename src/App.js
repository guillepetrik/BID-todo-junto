import './App.css';
import PersonCard from './Componentes/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard nombre="Kenzo" apellido="Tenma" edad="33" colorCab="Negro" />
      <PersonCard nombre="Johan" apellido="Liebhert" edad="22" colorCab="Rubio" />
      <PersonCard nombre="Tanjiro" apellido="Kamado" edad="17" colorCab="Negro" />
      <PersonCard nombre="Tengen" apellido="Uzui" edad="28" colorCab="Plateado" />
    </div>
  );
}

export default App;
