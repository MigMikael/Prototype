import React, { Component } from 'react'
import { Platform } from 'react-native'
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
  Tab, 
  Tabs,
  Thumbnail,
  View
} from 'native-base';

class SmallHeader extends Component {
  render() {
    const { goBack } = this.props.navigation
    const style = {
      headerAndroid: {
        fontSize: 17,
        color: "#ffffff"
      },
      headerIos: {
        fontSize: 17,
        color: "#000000"
      },
    }

    return (
      <Header>
        <Left style={{ flex: 1, paddingRight: 0, marginRight: 0 }}>
          <Button transparent onPress={() => goBack()}>
            <Icon name='md-arrow-round-back' />
          </Button>
        </Left>
        <Body style={{ paddingLeft: 0, marginLeft: 0, flex: 8, alignContent: 'flex-start' }}>
          <Text style={ Platform.OS === "android" ? style.headerAndroid: style.headerIos }>
          0958029-1 พีรวิชญ์ อรรถชิตสถาพร 36 ปี
          </Text>
        </Body>
      </Header>
    )
  }
}

export default SmallHeader