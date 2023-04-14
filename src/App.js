import { useState } from 'react';
import './App.css';
import Create from './components/Create';
import Card from './components/UI/Card';

function App() {

  const[state, setState] = useState([])

  function onSaveData(data) {
    setState((prevState) => {
      return [...prevState, data]
    })
  }

  return (
    <div className="App">
      <Create save = {onSaveData}/>
      {state.map((el) => {
        return(
          <Card>
            <p>{el.name}</p>
            <p>{el.age}</p>
          </Card>
        )
      })}
    </div>
  );
}

export default App;