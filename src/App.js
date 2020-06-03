import React, { Component } from 'react';
import './App.css';

let numbers = Array.from(Array(80).keys(), n => n + 1);

class App extends Component {
  state = {
    list: numbers,
    active: false
  };

  render() {
    return (
      <div>
        <ul className="grid">
          {this.state.list.map((item, index) =>
            <li onClick={() => this.setState({ active: true})}  key={index}>{item}</li>
          )}
        </ul>

        <form>
          <input placeholder="Place your stake"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
