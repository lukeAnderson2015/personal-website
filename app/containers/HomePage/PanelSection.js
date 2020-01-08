import styled from 'styled-components';

const PanelSection = styled.section`
  display: flex;
  align-items: center;

  height: 100vh;
  width: 100vw;

  .hoverFocusElement:hover {
    background-color: red;
  }
`;

export default PanelSection;
