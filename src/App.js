import './App.css';

function App() {
  return (
    <div className="appContainer">
      <header className="appHeader">
        <h1>
          How many discs?
        </h1>

        <div><input type="number" id="moneyInput" placeholder="Money spent"></input> <span id="dollarSign">$</span></div>

        <p id="result"></p>
      </header>
    </div>
  );
}

export default App;
