import styled from 'styled-components';

const PanelSection = styled.section`
  padding-left: 2%;
  
  display: flex;
  align-items: center;

  height: 100vh;
  width: 100%;

  .hoverFocusElement:hover {
    background-color: red;
  }
`;

export default PanelSection;
