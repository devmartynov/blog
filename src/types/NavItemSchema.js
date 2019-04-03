import PropTypes from 'prop-types';

const NavItemSchema = PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string,
    isActive: PropTypes.bool,
    isVisible: PropTypes.bool,
    items: PropTypes.arrayOf(NavItemSchema),
});

export default NavItemSchema;
