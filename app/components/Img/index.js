/**
 *
 * Img
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return (
    <img
      className={props.className}
      style={props.style}
      src={props.src}
      alt={props.alt}
    />
  );
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default memo(Img);
