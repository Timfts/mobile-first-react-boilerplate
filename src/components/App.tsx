import React from 'react'
import styled from 'styled-components';


const MyRedBox = styled.div`
  height: 30px;
  width:30px;
  background-color: red;
`



const App = () => {
  const date = new Date();
  console.log("cenoura");
return (
<div>
  <MyRedBox />
</div>
)
}

export default App