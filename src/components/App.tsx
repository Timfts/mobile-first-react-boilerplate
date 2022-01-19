import { useState } from "react";
import Tes from "@/components/Tes";
import BaseStyles from "./BaseStyles";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BaseStyles />
      <Tes />
    </div>
  );
}

export default App;
