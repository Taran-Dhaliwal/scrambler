//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header"
import Explines from "./MyComponents/Explines"
import Boxes from "./MyComponents/Boxes"

function App() {
  return (
    <div className="App">
      <Header/>
      <Explines score="0"/>
      <Boxes/>
    </div>
  );
}

export default App;
