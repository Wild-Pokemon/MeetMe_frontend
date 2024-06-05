import PropTypes from "prop-types";
import "@styles/components/Input.scss";

function Input({
  children,
  type = "text",
  id,
  placeholder,
  size = "large",
  ...rest
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{children}</label>
      <input
        className={size}
        type={type}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
