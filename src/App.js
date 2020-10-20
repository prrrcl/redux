import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addCounter, subtractCounter } from './redux/counter/actions';

function App({ counter }) {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const add = () => {
    addCounter(Number(input))
  }

  const subtract = () => {
    subtractCounter(Number(input))
  }

  return (
    <div className="App">
      Esto es el valor del contador de redux: {counter.count} <br/>
      <input type="number" onChange={handleChange} value={input} />
      <button onClick={add}>Añadir</button>
      <button onClick={subtract}>Restar</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

export default connect(mapStateToProps)(App);
