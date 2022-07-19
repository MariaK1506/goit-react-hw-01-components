import styled from 'styled-components';

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 5px 0;

  background-color: #ffffff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Status = styled.span`
  margin: 0 15px;

  display: inline-block;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 60px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-weight: 500;
  color: #000000;
`;
