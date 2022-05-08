import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [onions, setOnions] = useState(false)
  const [peppers, setPeppers] = useState(false)

  return ( 
    <div className="App">
      <div>
        <h1>Pizza Order</h1>
        <form className='PizzaForm'>
        <input
          type="text"
          name='name'
          placeholder='Name'
          onChange={(e) => {setName(e.target.value)} }/>
        <label>
        <h3>Click on the toppings you would like to add!</h3>
        <input 
            type="checkbox"
            checked={peperoni}
            onChange={() => {setPeperoni(!peperoni)}}
          />
          Peperoni
        </label>
        <label>
          <input 
            type="checkbox"
            checked={sausage}
            onChange={() => {setSausage(!sausage)}}
          />
          Sausage
        </label>
        <label>
        <input 
            type="checkbox"
            checked={peppers}
            onChange={() => {setPeppers(!peppers)}}
          />
          Peppers
        </label>
        <label>
        <input 
            type="checkbox"
            checked={onions}
            onChange={() => {setOnions(!onions)}}
          />
          Onions
        </label>
        <input type="submit" value="Submit" />
        </form>
      </div>
      <div className='DisplayPizza'>
        <h2>{name}</h2>
        {peperoni && <div>Pepperoni</div>}
        {sausage && <div>Sausage</div>}
        {onions && <div>Onions</div>}
        {peppers && <div>Peppers</div>}
      </div>
    </div>
  );
}

export default App;
