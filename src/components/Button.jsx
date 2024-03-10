import PropTypes from "prop-types";

export default function Button({ children }) {
  return (
    <button className="bg-[#0FAE96] px-12 py-4 rounded-md">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
