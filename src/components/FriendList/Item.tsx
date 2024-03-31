import PropTypes from "prop-types";
import style from './.module.css'

export type FriendListItemProps = {
  avatar: string;
  name: string;
  isOnline: boolean;
}
export default function FriendListItem(props: FriendListItemProps) {
  const { avatar, name, isOnline } = props

  return (
    <li className={style.item}>
      <span className={isOnline ? style.online : style.status}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>)
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
// type ItemProps = PropTypes.InferProps<typeof FriendListItem.propTypes>
//*? ItemProps