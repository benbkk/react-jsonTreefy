import React from 'react';
import PropTypes from 'prop-types';
import JsonNested from 'components/JsonNested';

// Returns the "n Items" string for this node,
// generating and caching it if it hasn't been created yet.
function createItemString(data) {
  const len = Object.getOwnPropertyNames(data).length;
  return `${len} ${len !== 1 ? 'keys' : 'key'}`;
}

// Configures <JsonNested> to render an Object
const JsonObjectNode = ({ data, ...props }) => (
  <JsonNested
    {...props}
    data={data}
    nodeType="Object"
    nodeTypeIndicator={props.nodeType === 'Error' ? 'Error()' : '{}'}
    createItemString={createItemString}
    expandable={Object.getOwnPropertyNames(data).length > 0}
  />
);

JsonObjectNode.propTypes = {
  data: PropTypes.object,
  nodeType: PropTypes.string
};

export default JsonObjectNode;
