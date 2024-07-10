import Button from "@components/Button";
import styles from "@styles/pages/friends/FriendList.module.scss";
import FriendsListItem from "./FriendsListItem";
import useEditStore from "@zustand/edit.mjs";

function FriendList() {
  const { isEditMode, setIsEditMode } = useEditStore();
  console.log(isEditMode);

  return (
    <div className={styles.FriendListLayout}>
      <div className={styles.FriendListTitle}>
        <span>20명</span>
        <Button
          text={isEditMode ? "편집" : "완료"}
          color={isEditMode ? "color2" : "color1"}
          size="superSmall"
          onClick={setIsEditMode}
        />
      </div>
      <div className={styles.ItemsWrapper}>
        <FriendsListItem />
        <FriendsListItem />
        <FriendsListItem />
        <FriendsListItem />
        <FriendsListItem />
      </div>
    </div>
  );
}

export default FriendList;
