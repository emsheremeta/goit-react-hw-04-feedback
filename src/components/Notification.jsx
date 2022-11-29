import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    return <p>{this.props.title}</p>;
  }
}

export default Notification;
