/**
 *
 * ArticleViewer
 *
 */

import React, { memo, useState } from 'react';
import styled from 'styled-components';

import Article from 'components/Article';
import ArticleDropdown from 'components/ArticleDropdown';

import articles from './articles';

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  align-content: space-evenly;
  height: 100vh;
  width: 100vw;
`;

const ArticleViewer = () => {
  const [selectedArticle, setSelectedArticle] = useState(articles[0]);

  return (
    <MainDiv>
      <ArticleDropdown
        id="titleListDropdown"
        articles={articles}
        setSelectedArticle={setSelectedArticle}
        selectedArticle={selectedArticle}
        inputValue={selectedArticle.title}
      />
      <Article article={selectedArticle} />
    </MainDiv>
  );
};

ArticleViewer.propTypes = {};

export default memo(ArticleViewer);
