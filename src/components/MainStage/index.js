import React from 'react';
import PropTypes from 'prop-types';
import JsonNode from 'components/JsonNode';

import AppWrapper from './StyledMain';

const identity = value => value;
const expandRootNode = (keyName, data, level) => level === 0;
const defaultItemString = (type, data, itemType, itemString) => (
  <span>
    {itemType} {itemString}
  </span>
);
const defaultLabelRenderer = ([label]) => <span>{label}:</span>;
const noCustomNode = () => false;

export default class JsonView extends React.Component {
    static propTypes = {
      data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
      hideRoot: PropTypes.bool,
      theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      invertTheme: PropTypes.bool,
      keyPath: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      ),
      postprocessValue: PropTypes.func,
      sortObjectKeys: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    };
  
    static defaultProps = {
      shouldExpandNode: expandRootNode,
      hideRoot: false,
      keyPath: ['root'],
      getItemString: defaultItemString,
      labelRenderer: defaultLabelRenderer,
      valueRenderer: identity,
      postprocessValue: identity,
      isCustomNode: noCustomNode,
      collectionLimit: 50,
      invertTheme: true
    };
  
    constructor(props) {
      super(props);
      this.state = {
          data: {}
      }
    }
  
    componentWillReceiveProps(nextProps) {
      // if (['theme', 'invertTheme'].find(k => nextProps[k] !== this.props[k])) {
        // this.setState(getStateFromProps(nextProps));
      // }
    }
  
    shouldComponentUpdate(nextProps) {
      /* return !!Object.keys(nextProps).find(
        k =>
          k === 'keyPath'
            ? nextProps[k].join('/') !== this.props[k].join('/')
            : nextProps[k] !== this.props[k]
      ); */
    }
  
    render() {
      const {
        data: value,
        keyPath,
        postprocessValue,
        hideRoot,
        ...rest
      } = this.props;
  
  
      return (
        <ul>
          <JsonNode
            {...{ postprocessValue, hideRoot, ...rest }}
            keyPath={hideRoot ? [] : keyPath}
            value={postprocessValue(value)}
          />
        </ul>
      );
    }
  }
  