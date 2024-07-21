import PropTypes from "prop-types";
import styles from "@styles/pages/promise/PromiseLocation.module.scss";
import { useRef, useState } from "react";
import PromiseSearchButton from "@pages/promise/PromiseSearchButton";

function PromiseLocation({ handleLocation }) {
  const [locations, setLocations] = useState([]);

  console.log(locations);

  // const handleClick = (i) => {
  //   console.log(Number(buttonRef.current[i].id));
  // };

  const handleRemove = (index) => {
    // console.log(index, "제거");
    // setButtonList((prev) => prev.filter((_, i) => i + 1 !== index));
    // buttonRef.current = buttonRef.current.filter((_, i) => i + 1 !== index);
  };

  // const [buttonList, setButtonList] = useState([]);

  const handleAdd = () => {
    // const index = 2 + buttonList.length;
    // setButtonList([
    //   ...buttonList,
    //   <button
    //     key={index}
    //     id={index}
    //     type="button"
    //     onClick={() => handleClick(index)}
    //     ref={(el) => (buttonRef.current[index] = el)}
    //   >
    //     장소나 주소를 입력하세요.
    //     <span
    //       type="button"
    //       className={styles.remove_button}
    //       onClick={() => handleRemove(index)}
    //     >
    //       제거
    //     </span>
    //   </button>,
    // ]);
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.promise_modal}>
        <button onClick={handleLocation}>
          <i className="ir">닫기</i>
          <img
            className={styles.modal_close}
            src="/src/assets/close.svg"
            alt="닫기"
          />
        </button>

        <h3 className={styles.location_title}>
          장소를 입력하고 중간 장소를 찾아보세요!
        </h3>

        <div className={styles.location_search_container}>
          {/* <button
            key={0}
            id={0}
            type="button"
            ref={(el) => (buttonRef.current[0] = el)}
            onClick={() => handleClick(0)}
          >
            장소나 주소를 입력하세요.
          </button>
          <button
            key={1}
            id={1}
            type="button"
            ref={(el) => (buttonRef.current[1] = el)}
            onClick={() => handleClick(1)}
          >
            장소나 주소를 입력하세요.
          </button>
          {buttonList} */}
          <PromiseSearchButton
            index={1}
            locations={locations}
            setLocations={setLocations}
          />
          <PromiseSearchButton
            index={2}
            locations={locations}
            setLocations={setLocations}
          />
        </div>

        <div className={styles.add_search}>
          <button onClick={handleAdd}>
            <img src="/src/assets/icon-plus.svg" />
            <span>장소 추가하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

PromiseLocation.propTypes = {
  handleLocation: PropTypes.func.isRequired,
};

export default PromiseLocation;
