import PropTypes from "prop-types";

function Input({ children, type, id, placeholder, ...rest }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input type={type} id={id} placeholder={placeholder} {...rest} />
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
