/**
 *
 * Img
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Img({ className, style, src, alt }) {
  return (
    <img
      className={className}
      style={style}
      src={src}
      alt={alt}
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
