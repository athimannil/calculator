import React from 'react';

class App extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="dashboard">
          <div className="brand">
            <h2>Casio</h2>
          </div>
          <div className="solar"></div>
          <div className="screen-wrap">
            <div className="screen">
            </div>
          </div>
        </div>
        <div className="buttons"></div>
      </main>
    );
  }
}

export default App;
