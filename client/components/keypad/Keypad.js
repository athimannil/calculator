import React from 'react';
import PropTypes from 'prop-types';

export class Keypad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      total: 0,
      operator: ''
    }
  }

  handleButton = (event) => {
    console.clear();
    console.log(event);
    console.log(event.target);
    console.log(event.target.name, event.target.name, event.target.name);
    console.log(typeof event.target.name);
    console.log(this);
    console.log(this.props);
    const current = Number(event.target.name);
    console.log(typeof current);
    this.setState({
      current: current
    });
    this.props.selectedValue(current);
  }

  handleOperation = (event) => {
    console.log(event.target.name);
  }

  render () {
    return (
      <div className="keypad">
        <h5 className="model">SL-300SV - <span>{this.state.current}</span></h5>
        <a
          className="button"
          name="√"
          onClick={this.handleOperation}
          >√</a>
        <a
          className="button"
          name="OFF"
          onClick={this.handleButton}
          >OFF</a>
        <a
          className="button"
          name="MC"
          onClick={this.handleButton}
          >MC</a>
        <a
          className="button"
          name="MR"
          onClick={this.handleButton}
          >MR</a>
        <a
          className="button"
          name="M-"
          onClick={this.handleButton}
          >M-</a>
        <a
          className="button"
          name="M+"
          onClick={this.handleButton}
          >M+</a>
        <a
          className="button"
          name="/"
          onClick={this.handleOperation}
          >/</a>
        <a
          className="button"
          name="%"
          onClick={this.handleOperation}
          >%</a>
        <a
          className="button"
          name="7"
          onClick={this.handleButton}
          >7</a>
        <a
          className="button"
          name="8"
          onClick={this.handleButton}
          >8</a>
        <a
          className="button"
          name="9"
          onClick={this.handleButton}
          >9</a>
        <a
          className="button"
          name="*"
          onClick={this.handleOperation}
          >*</a>
        <a
          className="button"
          name="+/-"
          onClick={this.handleOperation}
          >+/-</a>
        <a
          className="button"
          name="4"
          onClick={this.handleButton}
          >4</a>
        <a
          className="button"
          name="5"
          onClick={this.handleButton}
          >5</a>
        <a
          className="button"
          name="6"
          onClick={this.handleButton}
          >6</a>
        <a
          className="button"
          name=">-"
          onClick={this.handleOperation}
          >-</a>
        <a
          className="button primary"
          name="C"
          onClick={this.handleButton}
          >C</a>
        <a
          className="button"
          name={"1"}
          onClick={this.handleButton}
          >1</a>
        <a
          className="button"
          name="2"
          onClick={this.handleButton}
          >2</a>
        <a
          className="button"
          name="3"
          onClick={this.handleButton}
          >3</a>
        <a
          className="button plus"
          name="+"
          onClick={this.handleOperation}
          >+</a>
        <a
          className="button primary"
          name="AC"
          onClick={this.handleButton}
          >AC</a>
        <a
          className="button"
          name="0"
          onClick={this.handleButton}
          >0</a>
        <a
          className="button"
          name="."
          onClick={this.handleButton}
          >.</a>
        <a
          className="button"
          name="="
          onClick={this.handleOperation}
          >=</a>
      </div>
    );
  }
}

Keypad.propTypes = {
  name: PropTypes.string
}
