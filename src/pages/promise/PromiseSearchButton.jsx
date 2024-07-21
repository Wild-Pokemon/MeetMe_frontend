import PromiseLocationModal from "@pages/promise/PromiseLocationModal";
import styles from "@styles/pages/promise/PromiseSearchButton.module.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function PromiseSearchButton({ index, locations, setLocations }) {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("장소나 주소를 입력하세요.");

  console.log(index);

  const handleModal = (data) => {
    setButtonText(data.location);
    setLocations([...locations, data]);
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        className={styles.promise_search_button}
        type="button"
        onClick={handleClick}
      >
        {buttonText}
      </button>
      {isOpen && <PromiseLocationModal handleLocation={handleModal} />}
    </>
  );
}

PromiseSearchButton.propTypes = {
  index: PropTypes.number.isRequired,
  locations: PropTypes.array.isRequired,
  setLocations: PropTypes.func.isRequired,
};

export default PromiseSearchButton;
