import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  const [name, setName] = useState('Senac Campinas');

  let interval = null;
  interval = setInterval(() => {
    setName('ReactJS App');
  }, 5000);

   useEffect(() => {
    document.title = name;

    return () => clearInterval(interval);
  }, [name]);

  return (
    <div className="App">
      <h1>Senac</h1>
    </div>
  );
}

export default App;
