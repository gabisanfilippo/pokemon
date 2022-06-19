import {createGlobalStyle} from 'styled-components'
import { BrowserRouter } from "react-router-dom";

import RoutesApp from "./Routes/routes";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      font-family: 'Clash Display', sans-serif;
      box-sizing: border-box;
      list-style: none;
      padding: 0;
  }
  a,Link{
    text-decoration: none;
  }
  a,button:hover{
    cursor: pointer;
  }
`  

function App() {
  return (
    <BrowserRouter className="App"> 
      <GlobalStyle/>
      <RoutesApp/>
    </BrowserRouter>
  );
}

export default App;
