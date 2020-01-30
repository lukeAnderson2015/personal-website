import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Title = styled.h4`
    width: 62vw;
    margin-bottom: 0px;
    font-style: italic;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const SubTitle = styled.p`
    margin-top: 0;
    font-weight: normal;
    font-style: italic;
`;

export default class TitleListDropdown extends React.Component {

    render() {
        
        const selectStyles = {
            option: (provided, state) => ({
                ...provided,
                backgroundColor: 'rgb(220, 220, 220)',
                
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textAlign: "center",
            }),
            valueContainer: (provided, state) => ({
                ...provided,
                width: '300px',
                height: '50px'
            }),
            container: (provided, state) => ({
                ...provided,
                width: '65vw',
                height: '50px'
            }),
            menu: (provided, state) => ({
                ...provided,
                margin: 0
            }),
            menuList: (provided, state) => ({
                ...provided,
                padding: 0
            })
        };

        const options = this.props.articles.map(opt => {
                    return {
                        value: opt,
                        // label: `${opt.title} ~ ${opt.date}/${opt.genre}`
                        label: opt.title
                    };
                });

        const formatOptionLabel = ({value, label}) => (
            <div style={{display: 'flex', flexFlow: 'column'}}>
                <Title>{label}</Title>
                <SubTitle>{value ? `${value.date} ~ ${value.genre}` : ''}</SubTitle>
            </div>
        );

        return (
            <Select 
                styles={selectStyles}
                value={this.props.selectedArticle.title}
                onChange={obj => this.props.setSelectedArticle(obj.value)}
                options={options}
                formatOptionLabel={formatOptionLabel}
                noOptionsMessage="Doesn't look like anything at all."
                placeholder="Doesn't look like anything at all."
                menuPortalTarget={document.getElementById('titleListDropdown')}
            />
        );
    }
}