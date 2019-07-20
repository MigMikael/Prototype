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
  Thumbnail,
  Card,
  CardItem
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
        <SmallCard nav={ navigate } />
        <SmallCard nav={ navigate } />
        <SmallCard nav={ navigate } />
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
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem style={{ 
              flexDirection: "row",
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0
            }}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined, flex: 1}}
                placeholder="Select your Department"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff">
                <Picker.Item label="หน่วยงาน 1" value="key0" />
                <Picker.Item label="หน่วยงาน 2" value="key1" />
                <Picker.Item label="หน่วยงาน 3" value="key2" />
                <Picker.Item label="หน่วยงาน 4" value="key3" />
                <Picker.Item label="หน่วยงาน 5" value="key4" />
              </Picker>
              <Button primary full style={{ flex: 0.35 }} onPress={ this.handleTodayPress }>
                <Text>วันนี้</Text>
              </Button>
              <Button info full style={{ flex: 0.35 }} onPress={ this.handleCalendarPress }>
                <Text>ปฏิทิน</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <Accordion 
              expanded={0}
              dataArray={ this.data } 
              headerStyle={{ backgroundColor: "#b7daf8" }}
              renderContent={ this.renderAccordionContent } />
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Task