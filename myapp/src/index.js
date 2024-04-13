// const h1= document.createElement('h1')
// h1.innerHTML='i m learning react'
// document.getElementById("root").appendChild(h1);

import React from 'react'
import ReactDom from 'react-dom'

ReactDom.render(<h1>hey React</h1>,
document.getElementById("root"),()=>console.log("rendered"))