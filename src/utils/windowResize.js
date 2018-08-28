import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

class WindowResize extends React.Component {
  constructor(props) {
    super(props);

    const { func, wait } = this.props;
    this.handleResize = throttle(func, wait);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

WindowResize.propTypes = {
  func: PropTypes.func.isRequired,
  wait: PropTypes.number
};

WindowResize.defaultProps = {
  wait: 500
};

export default WindowResize;