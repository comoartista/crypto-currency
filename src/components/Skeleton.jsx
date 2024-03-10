import PropTypes from "prop-types";

export default function Skeleton({ className }) {
  return (
    <div className="animate-pulse">
      <div className={`bg-[#49474b] rounded-md ${className}`}></div>
    </div>
  );
}

Skeleton.propTypes = {
  className: PropTypes.string.isRequired,
};
