import React from 'react';
import styled from 'styled-components';

import Article from './Article.js';
import articles from './articles.js';
import TitleListDropdown from './TitleListDropdown.js';

const MainDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 3vh 0px 0px 0px;
    height: 95vh;
    width: 100vw;
`;

export default class ArticleViewer extends React.Component{

    
    state = {
        selectedArticle: articles[2]
    }

    setSelectedArticle = (selectedArticle) => {
        this.setState({selectedArticle});
    }

    render() {
        
        return (
            <MainDiv>
                <TitleListDropdown options={articles} />
                <Article article={this.state.selectedArticle}/>
            </MainDiv>
        );
    }
}