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
  Thumbnail,
  Card,
  CardItem,
  CheckBox,
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
            <Title>ตั้งค่า</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem header bordered>
              <Body>
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>การแจ้งเตือน</Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Body>
                <Text>รับการแจ้งเตือน</Text>
              </Body>
              <Right>
                <CheckBox checked={true}/>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}