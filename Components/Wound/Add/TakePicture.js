import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  Image,
  Dimensions,
  ImageEditor
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import { Container, Button } from 'native-base';
import SmallHeader from '../../Header/SmallHeader'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class TakePicture extends Component {
  constructor(props) {
    super(props)

    this.state = {
      path: null
    }
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { 
        quality: 0.5, 
        base64: true,
        fixOrientation: true
      };
      //const data = await this.camera.takePictureAsync(options);
      //console.log(data.uri);
      //this.setState({path: data.uri})

      this.camera.takePictureAsync(options).then((data) => {
          const cropData = {
              offset: {
                  x: 0,
                  y: 0,
              },
              size: {
                  width: data.width, 
                  height: data.width,
              },
          };
          ImageEditor.cropImage(
              data.uri, 
              cropData, 
              (successURI) => { 
                  console.log(successURI);
                  this.setState({ path: successURI })
                  this.handleAfterTakePicture()
              }, 
              (error) => {
                  console.log(error.message);
              },
          );
      });
    }
  };

  handleAfterTakePicture = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChoosePicture', {
      imgPath: this.state.path
    })
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <View>
          <RNCamera
            ref={ref => { this.camera = ref; }}
            style={{ width: w, height: (h*0.7) }}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
            ratio='1:1'
          />
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Button block onPress={ this.takePicture.bind(this) }>
              <Text>SNAP</Text>
            </Button>
            <View style={{ width: w, backgroundColor: '#ff0000' }}>
            { 
              this.state.path? 
              <View style={{ flexDirection: 'row', width: w, backgroundColor: '#00ff00' }}>
                <Image style={{ width: (w*0.15), height: (h*0.15) }} source={{ uri: this.state.path }}/>
                <Button light onPress={ this.handleAfterTakePicture }>
                  <Text>OK</Text>
                </Button>
              </View>
              :
              null
            }
            </View>
          </View>
        </View>
      </Container>
    )
  }
}

export default TakePicture