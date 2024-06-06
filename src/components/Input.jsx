import PropTypes from "prop-types";
import "@styles/components/Input.scss";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      children,
      type = "text",
      id,
      placeholder,
      size = "large",
      error = false,
      message,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="input-container">
        <label htmlFor={id}>{children}</label>
        <input
          ref={ref}
          className={`${size} ${error}`}
          type={type}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
        <p className={`${size}-message`}>{message}</p>
      </div>
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  message: PropTypes.string,
};

export default Input;
