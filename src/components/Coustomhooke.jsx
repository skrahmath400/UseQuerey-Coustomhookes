import { useState } from 'react';

// Custom hook definition
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}




function useDisplay() {
  const [state, setState] = useState(false);
  const changeState = () => {
    setState(true);
    alert("The state is changed to true state");
  }
  return { state, changeState };
}

// Display component
function Display() {
  const { state, changeState } = useDisplay();

  return (
    <div>
      <h2>Current State: {state.toString()}</h2>
      <button onClick={changeState}>Toggle State</button>
    </div>
  );
}



// Using the custom hook in a component
function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Another component using the same hook with different initial value
function AnotherCounter() {
  const { count, increment } = useCounter(10);

  return (
    <div>
      <h2>Another Count: {count}</h2>
      <button onClick={increment}>Add One</button>
    </div>
  );
}


export default Counter;
export {AnotherCounter,Display};