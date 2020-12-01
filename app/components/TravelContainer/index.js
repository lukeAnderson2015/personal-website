/**
 *
 * TravelContainer
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

const Container = styled.div`
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

function TravelContainer() {
  return (
    <Container>
      <ComposableMap width={950} height={600}>
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
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={6} fill="#00f2ba" />
        </Marker>
      </ComposableMap>
    </Container>
  );
}

export default memo(TravelContainer);
