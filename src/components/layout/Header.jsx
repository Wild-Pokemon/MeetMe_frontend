import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "@styles/components/Header.module.scss";
import meetmeLogo from "@assets/meetme_logo_symbol.svg";
import hamburger from "@assets/menu.svg";
import closeIcon from "@assets/close.svg";
import myPageIcon from "@assets/myPage.svg";
import friendsIcon from "@assets/friends.svg";
import scheduleIcon from "@assets/schedule.svg";
import Button from "@components/Button";
import useUserStore from "@zustand/user.mjs";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser } = useUserStore();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div
      className={`${styles.header} ${isMenuOpen ? styles.headerexpanded : ""}`}
    >
      <div className={styles.header_wrapper}>
        <div className={styles.header_logo}>
          <Link to={"/"} onClick={closeMenu}>
            <img src={meetmeLogo} alt="MeetMe Logo" />
          </Link>
        </div>
        <div className={styles.header_menu}>
          <button onClick={handleMenuToggle} className={styles.menu_button}>
            <img src={isMenuOpen ? closeIcon : hamburger} alt="Menu Button" />
          </button>
        </div>
      </div>
      <div
        className={`${styles.menu_items} ${
          isMenuOpen ? styles.menu_itemsopen : ""
        }`}
      >
        <div className={styles.menu_item}>
          <img src={myPageIcon} alt="My Page" />
          <Link to="/mypage" className="text-1" onClick={closeMenu}>
            마이페이지
          </Link>
        </div>
        <div className={styles.menu_item}>
          <img src={friendsIcon} alt="Friends" />
          <Link to="/friends" onClick={closeMenu}>
            친구관리
          </Link>
        </div>
        <div className={styles.menu_item}>
          <img src={scheduleIcon} alt="Schedule" />
          <Link to="/calendar" onClick={closeMenu}>
            스케줄관리
          </Link>
        </div>
        {user && (
          <div onClick={closeMenu}>
            <Button
              text={"로그아웃"}
              size={"extraSmall"}
              className={styles.btn}
              onClick={handleLogout}
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
