import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setUser(null);
    navigate("/users/login");
  };

  return (
    <header className={styles.header_container}>
      <div className={styles.header_wrapper}>
        <div className={styles.header_items}>
          <div>
            <Link>
              <img src={meetmeLogo} alt="로고" />
            </Link>
          </div>
          <div className={styles.leftside}>
            <div className={styles.eachItem}>
              <img src={myPageIcon} alt="마이페이지" />
              <Link to="/mypage" className="text-1" onClick={closeMenu}>
                마이페이지
              </Link>
            </div>
            <div className={styles.eachItem}>
              <img src={friendsIcon} alt="마이페이지" />
              <Link to="/friends" onClick={closeMenu}>
                친구관리
              </Link>
            </div>
            <div className={styles.eachItem}>
              <img src={scheduleIcon} alt="마이페이지" />
              <Link to="/calendar" onClick={closeMenu}>
                스케줄관리
              </Link>
            </div>
            <div className={styles.eachItem}>
              <Button
                text={"로그아웃"}
                size={"extraSmall"}
                className={styles.btn}
                onClick={handleLogout}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
