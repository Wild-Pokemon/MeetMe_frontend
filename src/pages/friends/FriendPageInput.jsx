import search from "@assets/search.svg";
import styles from "@styles/pages/friends/FriendPageInput.module.scss";

// eslint-disable-next-line react/prop-types
function FriendPageInput({ placeholder }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.inputContent}
        id="search"
        placeholder={placeholder}
      />
      <img src={search} alt="검색 아이콘" className={styles.searchIcon} />
    </div>
  );
}

export default FriendPageInput;
