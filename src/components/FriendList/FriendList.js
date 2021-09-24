import PropTypes from 'prop-types';
import styles from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.container}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={styles.item} key={id}>
            <span
              className={styles.status}
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.img,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
