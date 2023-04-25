import { useState,useEffect,useRef } from "react";

const UseRef = () => {
  const [inputValues,setValues] = useState('')
  const previousValues = useRef('')

  useEffect(() => {
    previousValues.current = inputValues
    document.title = inputValues ? inputValues : 'UseRef'
    setTimeout(() => {
      document.title = 'New Nattapon'
    }, 5000);
  },[inputValues])

  return (
    <div>
      <input type="text" value={inputValues} onChange={(e) => setValues(e.target.value)}
       />
       <h1> Current Value: {inputValues}</h1>
    </div>
  )
}

export default UseRef