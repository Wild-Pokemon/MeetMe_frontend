import { useState } from "react";
import PropTypes from "prop-types";

function Dropdown({ selectData, optionsData, handleSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectBox = () => {
    handleSelect();
    setIsOpen(false);
  };

  const options = optionsData.map((item, index) => (
    <li key={index}>
      <button type="button" onClick={handleSelectBox} value={item}>
        {item}
      </button>
    </li>
  ));

  return (
    <div className="dropdown">
      <button type="button" className="select-box" onClick={handleClick}>
        <span>{selectData}</span>
        <img
          className={isOpen ? "opened" : ""}
          src="/src/assets/down.svg"
          alt="메뉴 열기/닫기"
        />
      </button>
      {isOpen && <ul className="select-options">{options}</ul>}
    </div>
  );
}

Dropdown.propTypes = {
  selectData: PropTypes.string,
  optionsData: PropTypes.array,
  handleSelect: PropTypes.func,
};

export default Dropdown;
