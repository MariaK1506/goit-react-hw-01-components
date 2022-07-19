import PropTypes from 'prop-types';
// import { GoMention } from 'react-icons/go';
// import css from './Profile.module.css';
import defaultImg from 'default.jpg';
import {
  ProfileWrapper,
  DescriptionWrapper,
  Image,
  Name,
  UserTag,
  UserLocation,
  StatsList,
  StatsListItem,
  ItemLabel,
  ItemQuantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar = defaultImg, stats } = props;

  return (
    <ProfileWrapper key={username}>
      <DescriptionWrapper>
        <Image src={avatar} alt={username} />
        <Name>{username}</Name>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </DescriptionWrapper>

      <StatsList>
        <StatsListItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemQuantity>{stats.followers}</ItemQuantity>
        </StatsListItem>
        <StatsListItem>
          <ItemLabel>Views</ItemLabel>
          <ItemQuantity>{stats.views}</ItemQuantity>
        </StatsListItem>
        <StatsListItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemQuantity>{stats.likes}</ItemQuantity>
        </StatsListItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
