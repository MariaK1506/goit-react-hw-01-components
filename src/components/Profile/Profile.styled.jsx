import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 300px;

  margin: 20px auto;
  border-radius: 5px;

  background-color: #ffffff;
  border: 1px solid #000000;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const DescriptionWrapper = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #cfcfd0;

  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 0 0 10px;
  font-weight: 700;
`;

export const UserTag = styled.p`
  margin: 0 0 10px;
  color: #768696;
`;

export const UserLocation = styled.p`
  margin: 0;
  color: #768696;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;

  text-align: center;

  background-color: #f3f6f9;
`;

export const StatsListItem = styled.li`
  width: 33.3%;
  padding: 15px;

  :not(:last-child){
  border-right: 1px solid #cfcfd0;
}
}`;

export const ItemLabel = styled.span`
  display: block;
  margin-bottom: 5px;
  color: #768696;
`;

export const ItemQuantity = styled.span`
  font-weight: 700;
`;
