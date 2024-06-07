import PropTypes from "prop-types";
import "@styles/components/Input.scss";
import { forwardRef } from "react";

const Input = forwardRef(
  (
    { type = "text", id, placeholder, size = "large", error = false, ...rest },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`${size} ${error}`}
        type={type}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
);

Input.displayName = "Input";

Input.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.bool,
};

export default Input;
