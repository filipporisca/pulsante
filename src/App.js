import * as React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrementa = () => {
    setCount(count + 1);
  };

  const handleResetta = () => {
    setCount(0);
  };

  return (
    <div>

      <div>
        <div>
          <button type="button" onClick={handleIncrementa}>
            Incrementa
          </button>
        </div>
        <div>
          <button type="button" onClick={handleResetta}>
            Resetta
          </button>
        </div>
      </div>
      
      <div> 
        <div>{count}</div>
      </div>

    </div>
  );
}

export default App;
