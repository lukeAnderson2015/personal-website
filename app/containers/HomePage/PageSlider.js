import React from 'react';
import PropTypes, { number } from 'prop-types';

export default class PageSlider extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'grey',
          borderRadius: '5px',
          opacity: '80%',
          position: 'fixed',
          top: '35vh',
          right: '50px',
          width: '25px',
        }}
      >
        <input
          orient={this.props.vertical ? 'vertical' : ''}
          type="range"
          min={this.props.min}
          max={this.props.max}
          step="1"
        />
      </div>
    );
  }
}

PageSlider.propTypes = {
  vertical: PropTypes.bool.isRequired,
  min: number.isRequired,
  max: number.isRequired,
};
