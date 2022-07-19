import styled from 'styled-components';

export const StatSection = styled.section`
  width: 300px;

  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;

  border-radius: 5px;

  background-color: #ffffff;
`;

export const Title = styled.h2`
  padding: 20px 0;

  color: #768696;

  text-align: center;
  font-size: 19px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 60px;
  height: 60px;
  padding: 5px;

  text-align: center;
  color: #ffffff;
  background-color: ${getRandomHexColor};
  }};
`;

export const StatLabel = styled.span`
  margin-bottom: 5px;

  font-size: 15px;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
`;
