import Hello from './Hello'; 
import { useState } from 'react';


function App() {
  const [name, setName]= useState('');

  function onChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="App">
      <Hello />
      <div class="app">
        <p>Escribe algo: {name}</p>
        <label htmlFor='name'>Nombre</label>
        <input type='text' name='name' onChange={onChange}/>
      </div>
    </div>
    
    

  );
}

export default App;
