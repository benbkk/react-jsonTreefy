import React from 'react';
import PropTypes from 'prop-types';
import objType from './objType';
import JsonObject from './JsonObject';
import JsonArray from './JsonArray';
import JsonIterable from './JsonIterable';
import JsonValue from './JsonValue';

const JsonNode = ({
  getItemString,
  keyPath,
  labelRenderer,
  styling,
  value,
  valueRenderer,
  isCustomNode,
  ...rest
}) => {
  const nodeType = isCustomNode(value) ? 'Custom' : objType(value);

  const simpleNodeProps = {
    getItemString,
    key: keyPath[0],
    keyPath,
    labelRenderer,
    nodeType,
    styling,
    value,
    valueRenderer
  };

  const nestedNodeProps = {
    ...rest,
    ...simpleNodeProps,
    data: value,
    isCustomNode
  };

  switch (nodeType) {
    case 'Object':
    case 'Error':
    case 'WeakMap':
    case 'WeakSet':
      return <JsonObject {...nestedNodeProps} />;
    case 'Array':
      return <JsonArray {...nestedNodeProps} />;
    case 'Iterable':
    case 'Map':
    case 'Set':
      return <JsonIterable {...nestedNodeProps} />;
    case 'String':
      return (
        <JsonValue {...simpleNodeProps} valueGetter={raw => `"${raw}"`} />
      );
    case 'Number':
      return <JsonValue {...simpleNodeProps} />;
    case 'Boolean':
      return (
        <JsonValue
          {...simpleNodeProps}
          valueGetter={raw => (raw ? 'true' : 'false')}
        />
      );
    case 'Date':
      return (
        <JsonValue
          {...simpleNodeProps}
          valueGetter={raw => raw.toISOString()}
        />
      );
    case 'Null':
      return <JsonValue {...simpleNodeProps} valueGetter={() => 'null'} />;
    case 'Undefined':
      return (
        <JsonValue {...simpleNodeProps} valueGetter={() => 'undefined'} />
      );
    case 'Function':
    case 'Symbol':
      return (
        <JsonValue
          {...simpleNodeProps}
          valueGetter={raw => raw.toString()}
        />
      );
    case 'Custom':
      return <JsonValue {...simpleNodeProps} />;
    default:
      return null;
  }
};

JsonNode.propTypes = {
  getItemString: PropTypes.func.isRequired,
  keyPath: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
  labelRenderer: PropTypes.func.isRequired,
  styling: PropTypes.func.isRequired,
  value: PropTypes.any,
  valueRenderer: PropTypes.func.isRequired,
  isCustomNode: PropTypes.func.isRequired
};

export default JsonNode;
