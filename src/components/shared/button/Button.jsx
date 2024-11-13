import PropTypes from "prop-types";

function Button({ children, className }) {
  return (
    <button
      className={`bg-Yellow text-Text_Primary px-5 py-[10px] font-roboto text-[16px] font-bold leading-[24px] uppercase ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
