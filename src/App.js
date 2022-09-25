import logo from './logo.svg';
import './App.css';
import OrderContainer from "./Order/OrderContainer";

function App() {

  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
       <OrderContainer />
      </header>
    </div>
  );
}

export default App;
