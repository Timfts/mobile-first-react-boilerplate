import { useState } from "react";
import BaseStyles from "./BaseStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BaseStyles />
      <p>cenoura</p>
    </div>
  );
}

export default App;
