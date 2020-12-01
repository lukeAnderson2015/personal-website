/**
 *
 * PanelSection
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { windowWidthThreshhold } from '../../utils/constants';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: 75% 0%;
  max-width: 100%;
  max-height: 100vh;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    background-position: 0% 0%;
  }
`;

function PanelSection({ style, backgroundImage, id, children }) {
  return (
    <Section
      style={{
        ...style,
        backgroundImage: `url(${backgroundImage})`,
      }}
      id={id}
    >
      {children}
    </Section>
  );
}

PanelSection.propTypes = {
  style: PropTypes.object,
  id: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.object,
};

export default memo(PanelSection);
