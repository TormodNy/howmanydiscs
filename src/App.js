import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      result: ''
    };
  }

  onlyNumbers (val) {
    return /^\d*$/.test(val);
  }

  inputValueChanged(event) {
    if(this.onlyNumbers(String(event.target.value))){
      if (String(event.target.value).length > 12) {
        this.setState({
          result: "You wouldn't be here if you had that kind of money..."
        });
      } else {
        this.setState({
          inputValue: event.target.value
        });
        if (event.target.value) {
          this.setState({
            result: 'You can buy ' + Math.floor(event.target.value / 15) + ' discs for that money'
          });
        } else {
          this.setState({
            result: ''
          });
        }
      }
    }
  }

  render() {
    return (
      <div className="appContainer">
        <header className="appHeader">
          <h1>
            How many discs?
          </h1>

          <div>
            <input type="text" id="moneyInput" placeholder="Money spent" value={this.state.inputValue} onChange={event => this.inputValueChanged(event)}></input> <span id="dollarSign">$</span>
          </div>

          <p id="result">{this.state.result}</p>
        </header>
      </div>
    );
  }
}

export default App;
