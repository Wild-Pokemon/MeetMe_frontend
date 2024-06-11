import PropTypes from "prop-types";
import styles from "@styles/components/Button.module.scss";

function Button({
  type = "button",
  text,
  color = "color1",
  size,
  onClick,
  className,
}) {
  const colorMap = {
    color1: "#A4DCF9", // 기본 색상
    color2: "#F2994A", // 오렌지 색상
  };

  const buttonStyle = {
    backgroundColor: colorMap[color] || colorMap.color1,
  };

  const aboutBtn = `${styles.button} ${styles[`button--${size}`]} ${className}`;

  return (
    <button
      type={type}
      className={aboutBtn}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["color1", "color2"]),
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
