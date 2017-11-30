import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
    const { header } = this.props;
    const { backgroundColor } = this.state;
    return (
      <div className="RandomColor">
        <h2>{header}</h2>
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

RandomColor.propTypes = {
  header: PropTypes.string.isRequired,
};

export default RandomColor;
