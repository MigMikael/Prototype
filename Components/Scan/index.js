import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
 
class Scan extends Component {
  constructor() {
    super()
    this.state = {
      data: "",
      focusedScreen: false
    }
  }

  onSuccess = (e) => {
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
    this.setState({
      data: e.data
    })
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ 
        focusedScreen: true 
      })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ 
        focusedScreen: false ,
        data: ""
      })
    );
  }

  render() {
    const { hasCameraPermission, focusedScreen } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else if (focusedScreen){
      return (
        <QRCodeScanner
          onRead={this.onSuccess}
          topContent={
            <View>
              <Text style={styles.centerText}>Read Value: {this.state.data}</Text>
            </View>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
          reactivate={true}
          showMarker={true}
        />
      );
    } else {
      return <View />;
    }
  }
}
 
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Scan