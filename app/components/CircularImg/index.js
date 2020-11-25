/**
 *
 * CircularImg
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NormalImg from 'components/Img';

const CircularInnerImg = styled(NormalImg)`
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  display: inline;
  width: auto;
  opacity: 100%;
`;

function CircularImg(props) {
  const marginTop =
    props.style && props.style.marginTop ? props.style.marginTop : '0px';

  return (
    <div
      style={{
        width: '210px',
        height: '210px',
        marginTop,
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <CircularInnerImg {...props} />
    </div>
  );
}

CircularImg.propTypes = {
  style: PropTypes.object,
};

export default memo(CircularImg);
