import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ items }) => {
  return (
    <ul className={css.friendList}>
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
