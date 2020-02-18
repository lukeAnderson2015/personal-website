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
  padding: 3vh 0px 0px 0px;
  height: 100vh;
  width: 100vw;
`;

function ArticleViewer() {
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
}

export default memo(ArticleViewer);
