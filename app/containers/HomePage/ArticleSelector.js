import React from 'react';
import articles from './articles';

export default class ArticleSelector extends React.Component{

    
    render() {
        const rows = articles.map(a => {
            return <li>a.title</li>;
        })
        
        return <div>
            <ul>
                {rows}
            </ul>
        </div>;
    }
}