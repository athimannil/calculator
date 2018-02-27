import React from 'react';

import { Dashboard } from './dashboard/Dashboard';
import { Keypad } from './keypad/Keypad';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  kooy = (clickedOne) => {
    this.setState({
      current: clickedOne
    });
  }

  render() {
    return (
      <main className="main">
        <Dashboard value={this.state.current} />
        <Keypad selectedValue={this.kooy} />
      </main>
    );
  }
}

export default App;
