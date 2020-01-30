import React from 'react';
import styled from 'styled-components';

import Article from './Article.js';
import articles from './articles.js';
import TitleListDropdown from './TitleListDropdown.js';

const MainDiv = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    align-content: space-evenly;

    padding: 3vh 0px 0px 0px;
    height: 100vh;
    width: 100vw;
`;

export default class ArticleViewer extends React.Component{

    
    state = {
        selectedArticle: articles[1]
    }

    setSelectedArticle = (selectedArticle) => {
        this.setState({selectedArticle});
    }

    render() {
        return (
            <MainDiv>
                <TitleListDropdown id="titleListDropdown" articles={articles} setSelectedArticle={this.setSelectedArticle} selectedArticle={this.state.selectedArticle} />
                <Article article={this.state.selectedArticle}/>
            </MainDiv>
        );
    }
}