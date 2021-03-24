/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ThePage from 'containers/ThePage/Loadable';
import { Header, Footer } from 'components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../global-styles';
import { windowWidthThreshhold } from '../../utils/constants';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  font-size: 10px;

  @media screen and (min-width: ${windowWidthThreshhold}px) {
    font-size: 18px;
  }

  background-color: black;
  color: white;
`;

export default function App() {
  // handle window resizing to style dropdown wrapper
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth), [window.innerWidth];
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <AppWrapper>
      <Helmet>
        <title>Lukas Anderson</title>
        <meta name="description" content="Lukas Anderson" />
      </Helmet>
      <Header windowWidth={windowWidth} />
      <Switch>
        <Route exact path="/" component={() => <ThePage windowWidth={windowWidth} />} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
