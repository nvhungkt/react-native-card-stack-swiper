import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  View,
} from 'react-native';

const Card = ({ style, children, overflow }) => (
  <View style={style} overflow={overflow}>
    {children}
  </View>);

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  onSwipedLeft: PropTypes.func,
  onSwipedRight:PropTypes.func,
  onSwipedTop: PropTypes.func,
  onSwipedBottom: PropTypes.func,
  onSwiped: PropTypes.func,
}
Card.defaultProps = {
  style:{},
  onSwiped: () => {},
  onSwipedLeft: () => {},
  onSwipedRight: () => {},
  onSwipedTop: () => {},
  onSwipedBottom: () => {},
}

export default Card;
