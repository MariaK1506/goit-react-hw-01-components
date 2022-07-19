import styled from 'styled-components';

export const History = styled.table`
  margin: 0 auto;
  width: 600px;

  background-color: #f0f8ff;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-radius: 5px;
  background-color: rgba(149, 212, 236, 0.419);
  font-weight: 800;
`;

export const TableHeadItem = styled.th`
  padding: 15px 40px;
  font-size: 19px;
`;

export const TableBodyList = styled.tr`
  border: 1px solid gray;
`;

export const TableBodyItem = styled.td`
  padding: 5px 15px;
  text-align: center;
  font-size: 16px;
  border-bottom: 1px solid #5f6977;

  :nth-child(even) {
    background-color: rgba(149, 212, 236, 0.419);
  }
`;
