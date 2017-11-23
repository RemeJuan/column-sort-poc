import React from 'react';
import { get } from 'lodash';

export default (Component, onLoad, inProgress) =>
  class extends React.Component {
    componentWillMount() {
      if (typeof onLoad === 'function') {
        onLoad(this.props);
      } else {
        get(this.props, onLoad, () => {})();
      }
    }

    render() {
      const isInProgress =
        typeof inProgress === 'function'
          ? inProgress(this.props)
          : get(this.props, inProgress, false);

      return (
        <span>
          {!isInProgress && <Component {...this.props} {...this.state} />}
          {isInProgress && <div>Loading...</div>}
        </span>
      );
    }
  };
