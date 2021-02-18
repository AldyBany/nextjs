import { useState } from "react"


export default function Home() {
  const[number,setNumber] = useState(0)
  return (
    <div>
      <h1>Hello Next!</h1>
      <p>{number}</p>
      <button onClick={()=>setNumber(number + 1)}>Increment</button>
    </div>
  )
}
