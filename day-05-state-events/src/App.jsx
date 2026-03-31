import { useState } from "react";

export default function  App(){
  const[count,setCount]=useState(0);
  const[text,setText]=useState("");

  function handleChange(event){
    setText(event.target.value);
  }

  function addOne(){
    setCount(count+1);
  }
  function subtractOne(){
    setCount(count-1);
  }

return(
  <div>
  <h1>{count}</h1>
  <button onClick={addOne}>Add 1</button>
  <button style={{ marginLeft: "10px" }} onClick={subtractOne}>Subtract 1</button>
  <br />
  <input value={text} onChange={handleChange}/>
  </div>
)
}