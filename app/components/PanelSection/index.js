/**
 *
 * PanelSection
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: 75% 0%;
  max-width: 100%;
  max-height: 100vh;

  @media screen and (min-width: 768px) {
    background-position: 0% 0%;
  }
`;

function PanelSection(props) {
  return (
    <Section
      style={{
        ...props.style,
        backgroundImage: `url(${props.backgroundImage})`,
      }}
      id={props.id}
    >
      {props.children}
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
