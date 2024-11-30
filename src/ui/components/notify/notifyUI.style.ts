import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 6px;
  cursor: grab;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalMessage = styled.div``;

export const ModalContent = styled.div.attrs(() => ({
  role: 'dialog',
}))`
  text-align: center;
  text-decoration: none;
  background-color: white;
  border-radius: 6px;
  color: #4000c7;
`;
