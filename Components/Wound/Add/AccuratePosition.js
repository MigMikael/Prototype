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
  Card,
  CardItem
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
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered style={{ flexDirection: 'column'}}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>เลือกตำแหน่งแผล</Text>
            </CardItem>
            <TouchableOpacity onPress={ this.handlePositionPress }>
              <Image source={ require('../../../assets/specific_body_part.png') } resizeMode="contain" style={{
                height: undefined,
                width: '100%',
                aspectRatio: 1
              }}/>
            </TouchableOpacity>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default AccuratePosition