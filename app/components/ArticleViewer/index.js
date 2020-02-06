/**
 *
 * ArticleViewer
 *
 */

import React, { memo } from 'react';
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

class ArticleViewer extends React.Component {
  state = {
    selectedArticle: articles[0],
  };

  setSelectedArticle = selectedArticle => {
    this.setState({ selectedArticle });
  };

  render() {
    return (
      <MainDiv>
        <ArticleDropdown
          id="titleListDropdown"
          articles={articles}
          setSelectedArticle={this.setSelectedArticle}
          selectedArticle={this.state.selectedArticle}
          inputValue={this.state.selectedArticle.title}
        />
        <Article article={this.state.selectedArticle} />
      </MainDiv>
    );
  }
}

ArticleViewer.propTypes = {};

export default memo(ArticleViewer);
