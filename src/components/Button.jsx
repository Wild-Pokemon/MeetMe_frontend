import styles from "@styles/components/Button.module.scss";

/* eslint-disable */

function Button({
  type = "button",
  text,
  color = "#A4DCF9",
  size,
  onClick,
  className,
}) {
  const buttonStyle = {
    backgroundColor: color,
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

export default Button;
