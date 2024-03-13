import PropTypes from "prop-types";

export default function Button({ link, children }) {
  return (
    <a className="bg-[#0FAE96] px-12 py-4 rounded-md hoverBgElement" href={link}>{children}</a>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
