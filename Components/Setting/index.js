import React, { Component } from 'react'
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
  Thumbnail
} from 'native-base';

export default class Setting extends Component {
  render() {
    const { openDrawer } = this.props.navigation
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Setting</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Text>This is Settings</Text>
        </Content>
      </Container>
    )
  }
}