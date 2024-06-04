import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import meetmeLogo from "../../assets/meetme_logo_symbol.svg";
import hamburger from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg"; // 닫기 아이콘 추가
// import myPageIcon from "../../assets/myPage.svg"; // 각 아이콘을 추가합니다
// import friendsIcon from "../../assets/friends.svg";
// import scheduleIcon from "../../assets/schedule.svg";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${styles.header} ${isMenuOpen ? styles.headerexpanded : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link to={"/"}>
            <img src={meetmeLogo} alt="MeetMe Logo" className="" />
          </Link>
        </div>
        <div className={styles.header_menu}>
          <button onClick={handleMenuToggle} className={styles.menu_button}>
            <img
              src={isMenuOpen ? closeIcon : hamburger}
              alt="Menu Button"
              className=""
            />
          </button>
        </div>
      </div>
      <div
        className={`${styles.menu_items} ${
          isMenuOpen ? styles.menu_itemsopen : ""
        }`}
      >
        <div className={styles.menu_item}>
          {/* <img src={myPageIcon} alt="My Page" /> */}
          <Link to="/mypage">마이페이지</Link>
        </div>
        <div className={styles.menu_item}>
          {/* <img src={friendsIcon} alt="Friends" /> */}
          <Link to="/friends">친구관리</Link>
        </div>
        <div className={styles.menu_item}>
          {/* <img src={scheduleIcon} alt="Schedule" /> */}
          <Link to="/schedule">스케줄관리</Link>
        </div>
        <div>
          <button>로그아웃</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
