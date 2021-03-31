import "./App.css";
import Count from './components/Count/Count';
import Parent from './components/Parent/Parent';
import Time from './components/Hooks/UseEffect/Time';
import PreviousNumber from './components/Hooks/UseRef/PreviousNumber';

function App() {
  return <div className="App">
    <Count/>
    <Parent/>
    <Time/>
    <PreviousNumber/>
  </div>;
}

export default App;
