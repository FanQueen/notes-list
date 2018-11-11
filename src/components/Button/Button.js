import React from "react";
import "./Button.scss";
import PropTypes from "prop-types";

const Button = ({ className, type, children, onClick }) => (
  <button type={type} className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  className: "",
  onClick: () => {}
};

export default Button;
