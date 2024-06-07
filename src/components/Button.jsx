import styles from "@styles/components/Button.module.scss";

/* eslint-disable */

function Button({ text, color = "#A4DCF9", size, onClick }) {
  const buttonStyle = {
    backgroundColor: color,
  };

  const aboutBtn = `${styles.button} ${styles[`button--${size}`]}`;

  return (
    <button className={aboutBtn} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
