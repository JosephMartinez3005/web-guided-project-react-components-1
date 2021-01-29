import React, {useState} from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Don't forget all tags need to close correctly
*/

function App() {
  const [count, setCount] = useState(0);
  const cohort = "PT25"
  const incrementByOne = () =>{
    setCount(count + 1)
  }
  const incrementByFive = () =>{
    setCount(count * 5);
  }
  return (
    <div className="container">
      <h1>React Counter</h1>
  <h2>Count: {count}</h2>
      { count === 0 ?<h3>Increment me!</h3> : <h3>Good Job</h3>}
      <button onClick={incrementByOne} >Increment by 1</button>
      <button onClick={incrementByFive}>Multiply by 5</button>
      <button onClick={() =>{setCount(0)}}>Reset</button>
    </div>
  )
}

render(
  <App />,
  document.querySelector('#root')
)
