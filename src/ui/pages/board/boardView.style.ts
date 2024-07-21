import styled from 'styled-components';

export const BoardWrapper = styled('div')`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const InputWrapper = styled('div')`
  display: flex;
  gap: 10px;
`;

export const SaveButton = styled.button`
  background-color: red;

  &:disabled {
    background-color: #d3d3d3;
    color: #a9a9a9;
    cursor: not-allowed;
  }
`;
