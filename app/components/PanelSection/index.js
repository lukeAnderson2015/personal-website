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
  background-color: lightgrey;
  max-width: 100%;
  height: 100vh;
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
