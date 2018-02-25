import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

import './scss/App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
}


render(<App name="Mo" />, document.getElementById('app'));
