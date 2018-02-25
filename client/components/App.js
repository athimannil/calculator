import React from 'react';

import { Dashboard } from './dashboard/Dashboard';
import { Keypad } from './keypad/Keypad';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <Dashboard />
        <Keypad />
      </main>
    );
  }
}

export default App;
