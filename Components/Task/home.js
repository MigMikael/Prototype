import React, { Component } from 'react';
import SmallCard from '../Patient/SmallCard'
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

class Task extends Component {

  constructor() {
    super()
    this.data = [
      { title: "Bradon Score : <= 9", content: "Lorem ipsum dolor sit amet" },
      { title: "Bradon Score : 10-12", content: "Lorem ipsum dolor sit amet" },
      { title: "Bradon Score : 13-14", content: "Lorem ipsum dolor sit amet" },
      { title: "Bradon Score : 15-18", content: "Lorem ipsum dolor sit amet" }
    ]

    this.patients = [
      'Simon Mignolet',
      'Nathaniel Clyne',
      'Dejan Lovren',
      'Mama Sakho',
      'Alberto Moreno',
      'Emre Can',
      'Joe Allen',
      'Phil Coutinho',
    ]
  }

  componentDidMount() {
    console.log('Task DID MOUNT');
  }

  componentWillUnmount() {
    console.log('Task WILL UNMOUNT');
  }

  handleTodayPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('Task')
  }

  handleCalendarPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('CalendarTask')
  }

  renderAccordionContent = () => {
    const { navigation: { navigate }} = this.props
    return (
      <List>
        <SmallCard nav={ navigate }/>
        {/* <SmallCard onPress={ this.handleCardPress } />
        <SmallCard onPress={ this.handleCardPress } /> */}
      </List>
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Task</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ width: undefined, flex: 2 }}
            placeholder="Select your Department"
            placeholderStyle={{ color: "#bfc6ea" }}
            placeholderIconColor="#007aff">
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
          <View style={{ flexDirection: "row" }}>
            <Button primary style={{ flex: 1}} onPress={this.handleTodayPress}>
              <Text>Today</Text>
            </Button>
            <Button success style={{ flex: 1}} onPress={this.handleCalendarPress}>
              <Text>Calendar</Text>
            </Button>
          </View>
          <Accordion dataArray={ this.data } renderContent={ this.renderAccordionContent } />
        </Content>
      </Container>
    )
  }
}

export default Task