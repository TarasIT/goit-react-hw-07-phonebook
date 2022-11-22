import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 468px;

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Contact = styled.p`
  word-break: break-all;
  font-size: 18px;
`;

export const Number = styled.span`
  margin-left: 10px;
  font-weight: 500;
`;

export const ContactsDeleteBtn = styled.button`
  min-width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 18px;
  background-color: #d1d1d1b8;

  :hover,
  :focus {
    background-color: #b4b3b3;
  }
`;
