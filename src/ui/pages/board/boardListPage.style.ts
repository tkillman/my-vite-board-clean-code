import styled from 'styled-components';

export const ListSearchWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ListSearchRow = styled('div')`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const ListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 200px;
  overflow-y: auto;
`;

export const ListRowWrapper = styled('div')`
  width: 100%;
  height: 100%;
`;

export const ListHeader = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ListRow = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ListLoadingWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
