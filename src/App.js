import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App =() => {
  const [counter, setCounter] = useState(0)

  const increasedByOne = () => setCounter(counter + 1)
  const setToZero=()=> setCounter(0)
  const setSave=()=> setCounter(counter+0)
  // const Display =(props)=>{

  
  // setTimeout(

  //   () =>setCounter(counter + 1),
  //   1000
  // )
  const handleClick = () =>{
    console.log('clicked')
    
  }
  return (
  <div>
  {/* <Display counter={counter}/> */}
    <div>{counter}</div>
    <button onClick ={increasedByOne}>
      plus
    </button>

    <button onClick={setToZero}>
      zero
    </button>

    <button onClick={setSave}>
      save
    </button>
    

    </div>
    
    
  );
}


export default App;
