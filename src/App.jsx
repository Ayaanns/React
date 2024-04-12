import React from 'react'
import InputField from "./assets/components/InputField"
import { useState } from 'react'

const App = () => {
  
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState();

  const handleClick = (e) => {
    console.log("Name: ", name);
    console.log("City: ", city);
    console.log("Age: ", age);
  }

  return (
    <>
      <h1 className="header">Form</h1>
      <form onSubmit={e => e.preventDefault()} className='form'>
        <h3 className="input-header">Name</h3>
        <InputField value={name} setValue={setName}/>

        <h3 className="input-header">City</h3>
        <InputField value={city} setValue={setCity}/>

        <h3 className="input-header">Age</h3>
        <InputField type='number' value={age} setValue={setAge}  />

        <button onClick={(e) => handleClick(e)}>Submit</button>
      </form>
    </>
    
  )
}

export default App