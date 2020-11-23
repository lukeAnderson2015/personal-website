/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ThePage from 'containers/ThePage/Loadable';
import { Header, Footer } from 'components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  font-size: 18px;

  @media 768px { 
    font-size: 18px;
  }

  background-color: black;
  color: white;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet>
        <title>Lukas Anderson</title>
        <meta name="description" content="Lukas Anderson" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={ThePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
