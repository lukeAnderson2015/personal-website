import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const Title = styled.h4`
    width: 55vw;
    margin: 0px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
`;

const SubTitle = styled.p`
    margin: 0;
    font-weight: normal;
    font-style: italic;
`;

const OptionLabelContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    color: black;
`;

const selectStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'rgb(55, 85, 122)' : 'rgb(220, 220, 220)',
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textAlign: "center",
        borderBottom: 'solid 1px grey',
        ':hover': {
            cursor: 'pointer'
        }
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        width: '300px',
        height: '50px',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        width: '75px',
    }),
    indicatorContainer: (provided, state) => ({
        ...provided,
    }),
    container: (provided, state) => ({
        ...provided,
        width: '65vw',
        height: '100px'
    }),
    control: (provided, state) => ({
        ...provided,
        border: '0px',
        height: '100px',
        background: 'rgb(220, 220, 220, 0.7)',
    }),
    menu: (provided, state) => ({
        ...provided,
        margin: 0
    }),
    menuList: (provided, state) => ({
        ...provided,
        padding: 0
    }),
    singleValue: (provided, state) => ({
        ...provided,
        padding: '0px 0px 0px 50px',
        fontSize: '1.1em'
    })
};

export default class TitleListDropdown extends React.Component {

    render() {
        
        const options = this.props.articles.map(opt => {
                    return {
                        value: opt,
                        label: opt.title
                    };
                });

        const formatOptionLabel = ({value, label}) => (
            <OptionLabelContainer>
                <Title> {label} </Title>
                <SubTitle>{value ? `${value.date} ~ ${value.genre}` : ''}</SubTitle>
            </OptionLabelContainer>
        );

        return (
            <Select 
                styles={selectStyles}
                value={options.filter(o => o.value.id === this.props.selectedArticle.id)}
                onChange={obj => this.props.setSelectedArticle(obj.value)}
                options={options}
                formatOptionLabel={formatOptionLabel}
                noOptionsMessage={() => "Doesn't look like anything at all."}
                placeholder="Doesn't look like anything at all."
                
                menuPortalTarget={document.getElementById('titleListDropdown')}
            />
        );
    }
}