import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState("light");
  const styles = {
    background: mode === "light" ? "black" : "white"
  };
  return (
    <div style={styles} className="App">
      <List mode={mode} setMode={setMode} />
    </div>
  );
}

const List = ({ mode, setMode }) => (
  <ul>
    <ListItem value="Light" mode={mode} setMode={setMode} />
    <ListItem value="Dark" mode={mode} setMode={setMode} />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button= ({value}) =>{
  const [mode ,setMode]=useContext()
  const styles ={
    background :!(mode ==="light")?"black":"white",
    color:mode ==="light"?"black":"white"
};
return(
  <button style ={styles}
  onClick ={()=>setMode(value==="Light"?"black":"white")
  {value}
  </button>
);  
};
