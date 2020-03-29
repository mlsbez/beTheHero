import React, { useState } from 'react'; // useState para registrar o estado da app, ser mais dinâmico

import Header from './Header';

function App() {
  const [counter, setCounter] = useState(0); // setCounter altera o valor do counter

  // useState: retorna um Array [valor, funçãoDeAtualização]
  function increment() {
    setCounter(counter + 1);
  }

  return (
    // <Header title="Semana OmniStack" /> 
    <div>
      <Header>Contador: {counter}</Header> {/* { } quando for usar uma variável dentro do html */}
      <button onClick={increment}>Incrementar</button> {/* vai chamar a função increment toda vez que clicar no botão */}
    </div>
  );
}



export default App;
