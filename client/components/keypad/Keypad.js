import React from 'react';

export class Keypad extends React.Component {
  render () {
    return (
      <div className="keypad">
        <h5 className="model">SL-300SV</h5>
        <a className="button">√</a>
        <a className="button">OFF</a>
        <a className="button">MC</a>
        <a className="button">MR</a>
        <a className="button">M-</a>
        <a className="button">M+</a>
        <a className="button">/</a>
        <a className="button">%</a>
        <a className="button">7</a>
        <a className="button">8</a>
        <a className="button">9</a>
        <a className="button">*</a>
        <a className="button">+/-</a>
        <a className="button">4</a>
        <a className="button">5</a>
        <a className="button">6</a>
        <a className="button">-</a>
        <a className="button primary">C</a>
        <a className="button">1</a>
        <a className="button">2</a>
        <a className="button">3</a>
        <a className="button plus">+</a>
        <a className="button primary">AC</a>
        <a className="button">0</a>
        <a className="button">.</a>
        <a className="button">=</a>
      </div>
    );
  }
}
