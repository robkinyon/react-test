// vim: sw=3 ts=2 ft=javascript

import React from 'react';
import {
  Image, View, Animated, Easing, Text, TouchableHighlight,
  StyleSheet
} from 'react-native';

// All of this taken from https://stackoverflow.com/a/37445916/1732954
export default class Foo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      count: 0,
      spinValue: new Animated.Value(0),
    };

    this.spin = this.spin.bind(this);
  }

  /*
  componentDidMount () {
    this.spin();
  }
  */

  spin (res) {
    this.state.spinValue.setValue(0);

    Animated.timing(
      this.state.spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        // useNativeDriver: true,
      }
    ).start();//.start(this.spin);
  }

  render(){
    let self = this;

    const spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    });

    return(
      <View style={styles.container}>
        <TouchableHighlight
          onPress={ ()=> this.spin() }
        >
          <Animated.Image
            style={{width: 200, height: 200, transform: [{rotate: spin}]}}
            source={{uri: "https://ca.res.keymedia.com/files/image/wheel(1).jpg" }}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
