import PropTypes from "prop-types";
import style from './.module.css'
import FriendListItem, { FriendListItemProps } from "./Item";

export default function FriendList({ friends }: {
  friends: (FriendListItemProps & {
    id: number;
  })[]
}) {

  return (
    <ul className={style["friend-list"]}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      ...FriendListItem.propTypes
    }).isRequired
  ).isRequired
}
