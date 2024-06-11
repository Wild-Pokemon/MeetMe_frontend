import "@styles/pages/promise/PromiseFriendModal.scss";
import profile from "@assets/basic_profile.svg";
import selectIcon from "@assets/select_friend.svg";
import checked from "@assets/checked_friend.svg";
import Input from "@components/Input";
import Button from "@components/Button";
import PropTypes from "prop-types";

function PromiseFriendModal({ handleFriend }) {
  return (
    <div className="modal-wrapper">
      <div className="promise-modal">
        <div className="promise-modal-header">
          <div className="promise-select-user">
            <img
              className="select-user-src"
              src={profile}
              alt="기본프로필이미지"
            />
            <p className="select-user-name">홍길동</p>
          </div>
          <div className="promise-select-user">
            <img
              className="select-user-src"
              src={profile}
              alt="기본프로필이미지"
            />
            <p className="select-user-name">박새로이</p>
          </div>
        </div>
        <div className="promise-modal-contents">
          <Input
            size="small"
            type="text"
            id="promise"
            placeholder="함께할 친구를 찾아보세요."
          />

          <div className="promise-modal-list">
            <h3>친구 목록</h3>
            <div className="promise-modal-list-box">
              <div className="promise-modal-list-item">
                <div className="promise-modal-list-info">
                  <img
                    className="select-user-src type-small"
                    src={profile}
                    alt="기본프로필이미지"
                  />
                  <p className="select-user-name">박새로이</p>
                </div>

                <button type="button">
                  <img src={checked} alt="체크아이콘" />
                </button>
              </div>

              <div className="promise-modal-list-item">
                <div className="promise-modal-list-info">
                  <img
                    className="select-user-src"
                    src={profile}
                    alt="기본프로필이미지"
                  />
                  <p className="select-user-name">김도영</p>
                </div>

                <button type="button">
                  <img src={selectIcon} alt="체크아이콘" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Button
          text={"완료"}
          size={"small"}
          className="layout-btn"
          onClick={handleFriend}
        />
      </div>
    </div>
  );
}

PromiseFriendModal.propTypes = {
  handleFriend: PropTypes.func.isRequired,
};

export default PromiseFriendModal;
