import PropTypes from "prop-types";

export const TEmployee = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string,
});