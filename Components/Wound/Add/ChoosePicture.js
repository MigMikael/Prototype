import React, { Component } from 'react'
import SmallHeader from '../../Header/SmallHeader'
import { Image, ImageBackground, Dimensions } from 'react-native'
import { 
  Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input,
  Left, 
  Right, 
  Body,
  Button,
  Icon,
  Title,
  Text,
  Accordion,
  View,
  Picker,
  List,
  ListItem,
  Thumbnail,
  CheckBox,
  Badge,
  Card, 
  CardItem
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class ChoosePicture extends Component {

  handleTakePicturePress = () => {
    const { navigation: { navigate }} = this.props
    navigate('TakePicture')
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChooseCause')
  }

  render() {
    const { navigation } = this.props 
    const imgPath = navigation.getParam('imgPath', '')
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card style={{ height: (h*0.7)}}>
            <CardItem bordered>
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>รูปบาดแผล</Text>
            </CardItem>
            <CardItem style={{ flexDirection: 'column' }}>
              <Button primary block onPress={ this.handleTakePicturePress }>
                <Text>ถ่ายภาพ</Text>
              </Button>
              <Button info block >
                <Text>เลือกรูปจากคลัง</Text>
              </Button>

              {
                imgPath !== "" ? 
                <ImageBackground source={{ uri: imgPath }} resizeMode="contain" style={{ 
                  height: undefined,
                  width: '100%',
                  aspectRatio: 1
                }}></ImageBackground>
                :
                null
              }
            </CardItem>
          </Card>
          <Button dark block style={{ flex: 0.5 }} onPress={ this.handleNextPress }>
            <Text>ต่อไป</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ChoosePicture