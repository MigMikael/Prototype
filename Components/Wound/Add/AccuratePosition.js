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
            {/* <TouchableOpacity onPress={ this.handlePositionPress }> */}
              <Image source={ require('../../../assets/foot_1_mark.png') } resizeMode="contain" style={{
                height: undefined,
                width: '100%',
                aspectRatio: 1
              }}/>
            {/* </TouchableOpacity> */}
            <CardItem>
              <Body>
                <Button dark block onPress={ this.handlePositionPress }>
                  <Text>ต่อไป</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default AccuratePosition