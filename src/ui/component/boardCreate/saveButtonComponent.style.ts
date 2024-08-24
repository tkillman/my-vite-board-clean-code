import styled from 'styled-components';

export const SaveButton = styled.button`
  background-color: red;

  &:disabled {
    background-color: #d3d3d3;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;
