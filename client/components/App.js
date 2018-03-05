import React from 'react';

import { Dashboard } from './dashboard/Dashboard';
import { Keypad } from './keypad/Keypad';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machineOn: false,
      total: null,
      next: null,
      operation: null,
      memory: null
    };
  }

  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName));
  }

  render() {
    return (
      <main className="main">
        <Dashboard
          machine={this.state.machineOn}
          value={this.state.next || this.state.total || '0'}
        />

        <Keypad
          selectedValue={this.handleClick}
        />
      </main>
    );
  }
}

export default App;
