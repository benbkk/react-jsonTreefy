import React from 'react';
import PropTypes from 'prop-types';

const JsonArrow = ({ styling, arrowStyle, expanded, nodeType, onClick }) => (
  <div className={'arrowContainer'} onClick={onClick}>
    <div className={['arrow', 'arrowSign'], nodeType, expanded}>
      {'\u25B6'}
      {arrowStyle === 'double' && (
        <div {['arrowSign', 'arrowSignInner']}>{'\u25B6'}</div>
      )}
    </div>
  </div>
);

JsonArrow.propTypes = {
  styling: PropTypes.func.isRequired,
  arrowStyle: PropTypes.oneOf(['single', 'double']),
  expanded: PropTypes.bool.isRequired,
  nodeType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

JsonArrow.defaultProps = {
  arrowStyle: 'single'
};

export default JsonArrow;
