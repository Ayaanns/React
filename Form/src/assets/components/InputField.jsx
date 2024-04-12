import React from 'react'

const InputField = ({value, setValue, type = "text"}) => {
  return (
    <input type={type} value={value} onChange={(event) => {
        setValue(event.target.value)
    }}/>
  )
}

export default InputField