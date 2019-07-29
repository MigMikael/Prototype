import React, { Component } from 'react'
import SmallHeader from '../../Header/SmallHeader'
import { Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
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
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class AccuratePosition extends Component {

  handlePositionPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChoosePicture')
  }

  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content style={{ flexDirection: "column"}} centerContent>
          <Text style={{ fontSize: 21, fontWeight: 'bold' , width: "100%", marginTop: "10%", alignContent: 'center' }}>เลือกตำแหน่งของแผล</Text>
          <TouchableOpacity onPress={ this.handlePositionPress }>
            <Image source={ require('../../../assets/specific_body_part.png') } resizeMode="contain" style={{
              height: undefined,
              width: '100%',
              aspectRatio: 1
            }}/>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }
}

export default AccuratePosition