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
} from 'native-base'

const w = Dimensions.get('window').width; //full width
const h = Dimensions.get('window').height; //full height

class AccuratePosition extends Component {
  render() {
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content style={{ flexDirection: "column"}} centerContent>
          <Text>เลือกตำแหน่งของแผล</Text>
          <Image source={ require('../../../assets/specific_body_part.png') } resizeMode="contain" style={{
            height: undefined,
            width: '100%',
            aspectRatio: 1
          }}/>
        </Content>
      </Container>
    )
  }
}

export default AccuratePosition