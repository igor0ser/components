import React, { PureComponent } from 'react';
import random from 'lodash/random';
import './RandomColor.css';

class RandomColor extends PureComponent {
  state = { backgroundColor: 'purple' }

  changeColor = () => {
    this.setState({
      backgroundColor:
        `rgb(${random(255)},${random(255)}, ${random(255)})`,
    });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <div className="RandomColor">
        <div
          className="RandomColor__canvas"
          style={{ backgroundColor }}
        />
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

export default RandomColor;
