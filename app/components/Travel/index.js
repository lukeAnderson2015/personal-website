/**
 *
 * Travel
 *
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { windowWidthThreshhold } from '../../utils/constants';
import locations from './locations';

const Wrapper = styled.div`
  svg {
    display: inline-block;
    vertical-align: middle;
  }
  
  display: none;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    display: block;
    height: auto;
  }
`;

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

function Travel() {
  return (
    <Wrapper>
      <ComposableMap width={950} height={575}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="white"
                stroke="black"
              />
            ))
          }
        </Geographies>
        {locations.map(m =>
          <Marker coordinates={m.coords}>
            <circle r={5} fill="#00f2ba" />
          </Marker>
        )}
      </ComposableMap>
    </Wrapper>
  );
}

export default memo(Travel);
