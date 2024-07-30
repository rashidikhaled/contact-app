import { useState } from "react";
import Header from "./components/Header";

import "./global.css";
import Contacts from "./components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Contacts />
    </>
  );
}

export default App;
