import { useState } from 'react'
import Tes from "@/components/Tes"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Tes />
    </div>
  )
}

export default App
