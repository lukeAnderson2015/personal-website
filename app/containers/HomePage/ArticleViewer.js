import React from 'react';
import styled from 'styled-components';

import Article from './Article.js';
import articles from './articles.js';

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 140px 0px 0px 0px;
    height: 100vh;
    width: 100vw;
`;


const Title = styled.div`
    display: inline-block;
    width: 100%;
    height: 50px;
    padding: 10px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    background-color: rgb(220, 220, 220, 0.6);

    :hover {
        border: solid grey 1px;
        cursor: pointer;
        background-color: rgb(220, 220, 220, 0.8);
    }
`;

const TitleList = styled.div`
    width: 28vw;
`;

export default class ArticleViewer extends React.Component{

    
    state = {
        selectedArticle: articles[0]
    }

    setSelectedArticle = (selectedArticle) => {
        this.setState({selectedArticle});
    }

    render() {
        const rows = articles.map(a => {
            return <Title
                        style={a.id === this.state.selectedArticle.id ? {backgroundColor: 'rgb(220, 220, 220, 0.8)', textDecoration: 'underline'} : {} }
                        onClick={() => this.setSelectedArticle(a)}
                        key={a.id} 
                    >
                        {a.title}
                    </Title>;
        });
        
        return (
            <MainDiv>
                <TitleList>
                    {rows}
                </TitleList>
                <Article article={this.state.selectedArticle}/>
            </MainDiv>
        );
    }
}