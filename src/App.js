import logo from './logo.svg';
import './App.css';


function App() {
  const getInput = (i) => {
    var x =i;
    var temp = document.getElementById('input').value;
    if(temp.includes('+') === true && x === '='){
      document.getElementById('input').value=eval(document.getElementById('input').value);
    }
    else if(x === '='){
      document.getElementById('input').value=eval(document.getElementById('input').value);
    }else if(x === 'ac'){
      document.getElementById('input').value='';
    }else{
     document.getElementById('input').value+=i;
    }
  } 
  return (
    <div className="calculator">
      <center>
        <input type='text' id='input'></input>
        <br></br>
        <button className='buttonWidth' onClick={() => getInput("Deg")}>Deg</button>
        <button className='buttonWidth' onClick={() => getInput("x!")}>x!</button>
        <button className='buttonWidth' onClick={() => getInput("(")}>(</button>
        <button className='buttonWidth' onClick={() => getInput(")")}>)</button>
        <button className='buttonWidth' onClick={() => getInput("%")}>%</button>
        <button className='buttonWidth' onClick={() => getInput("ac")}>AC</button>
        <br></br>
        <button className='buttonWidth' onClick={() => getInput("sin")}>sin</button>
        <button className='buttonWidth' onClick={() => getInput("In")}>In</button>
        <button className='buttonWidths' onClick={() => getInput("7")}>7</button>
        <button className='buttonWidths' onClick={() => getInput("8")}>8</button>
        <button className='buttonWidths' onClick={() => getInput("9")}>9</button>
        <button className='buttonWidth' onClick={() => getInput("÷")}>÷</button>
        <br></br>
        <button className='buttonWidth' onClick={() => getInput("cos")}>cos</button>
        <button className='buttonWidth' onClick={() => getInput("log")}>log</button>
        <button className='buttonWidths' onClick={() => getInput("4")}>4</button>
        <button className='buttonWidths' onClick={() => getInput("5")}>5</button>
        <button className='buttonWidths' onClick={() => getInput("6")}>6</button>
        <button className='buttonWidth' onClick={() => getInput("x")}>x</button>
        <br></br>
        <button className='buttonWidth' onClick={() => getInput("tan")}>tan</button>
        <button className='buttonWidth' onClick={() => getInput("√")}>√ </button>
        <button className='buttonWidths' onClick={() => getInput("1")}>1</button>
        <button className='buttonWidths' onClick={() => getInput("2")}>2</button>
        <button className='buttonWidths' onClick={() => getInput("3")}>3</button>
        <button className='buttonWidth' onClick={() => getInput("-")}>-</button>
        <br></br>
        <button className='buttonWidth' onClick={() => getInput("EXP")}>EXP</button>
        <button className='buttonWidth' onClick={() => getInput("y")}>x<sup>y</sup></button>
        <button className='buttonWidths' onClick={() => getInput("0")}>0</button>
        <button className='buttonWidths' onClick={() => getInput(".")}>.</button>
        <button className='buttonWidthss' onClick={() => getInput("=")}>=</button>
        <button className='buttonWidth' onClick={() => getInput("+")}>+</button>
      </center>
    </div>
  );
}

export default App;
