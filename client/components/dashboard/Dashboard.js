import React from 'react';

export class Dashboard extends React.Component {
  render () {
    return (
      <div className="dashboard">
        <div className="brand">
          <h2>Casio</h2>
        </div>
        <div className="solar"></div>
        <div className="screen-wrap">
          <div className="screen">
            <h2>{this.props.value}</h2>
          </div>
        </div>
      </div>
    );
  }
}
