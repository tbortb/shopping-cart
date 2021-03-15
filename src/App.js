import logo from './logo.svg';
import './App.css';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import CartItems from './CartItems';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
    <CartHeader />
    <CartItems />
    <CartFooter copyright="2021" />
    </div>
  );
}

export default App;
