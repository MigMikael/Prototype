import React, { Component } from 'react';
import SmallCard from '../Patient/SmallCard'
import patients from '../../Data/patient'
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
    this.sections = [
      { title: "Bradon Score : <= 9",  content: 1 },
      { title: "Bradon Score : 10-12", content: 2 },
      { title: "Bradon Score : 13-14", content: 3 },
      { title: "Bradon Score : 15-18", content: 4 },
      { title: "Bradon Score : > 18", content: 5 }
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

  renderAccordionHeader = (section) => {
    return (
      <View>
        <Text>{section.title}</Text>
      </View>
    )
  }

  renderAccordionContent = (section) => {
    const { navigation: { navigate }} = this.props
    let patientBySection = {}
    if (section.content === 1) {
      patientBySection = patients.filter(function(patient) {
        return patient.braden <= 9
      })
    } else if (section.content === 2) {
      patientBySection = patients.filter(function(patient) {
        return patient.braden >= 10 && patient.braden <= 12 
      })
    } else if (section.content === 3) {
      patientBySection = patients.filter(function(patient) {
        return patient.braden >= 13 && patient.braden <= 14 
      })
    } else if (section.content === 4){
      patientBySection = patients.filter(function(patient) {
        return patient.braden >= 15 && patient.braden <= 18
      })
    } else {
      patientBySection = patients.filter(function(patient) {
        return patient.braden >= 19
      })
    }
    return (
      <List>
        {
          patientBySection.map(patient => {
            return (<SmallCard nav={ navigate } patient={ patient } key={ patient.id }/>)    
          })
        }
      </List>
    )
  }

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
            <Title>ตารางงาน</Title>
          </Body>
          <Right />
        </Header>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem style={{ 
              flexDirection: "row",
              flex: 1,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}>
              <Left>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ width: undefined, flex: 0.5}}
                  placeholder="หน่วยงาน"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff">
                  <Picker.Item label="หน่วยงาน 1" value="key0" />
                  <Picker.Item label="หน่วยงาน 2" value="key1" />
                  <Picker.Item label="หน่วยงาน 3" value="key2" />
                  <Picker.Item label="หน่วยงาน 4" value="key3" />
                  <Picker.Item label="หน่วยงาน 5" value="key4" />
                </Picker>
              </Left>
              <Right style={{ 
                flexDirection: "row",
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0, 
              }}>
                <Button primary full style={{ flex: 0.5 }} onPress={ this.handleTodayPress }>
                  <Text>วันนี้</Text>
                </Button>
                <Button info full style={{ flex: 0.5 }} onPress={ this.handleCalendarPress }>
                  <Text>ปฏิทิน</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <Accordion 
              expanded={0}
              dataArray={ this.sections } 
              headerStyle={{ backgroundColor: "#b7daf8" }}
              renderContent={ this.renderAccordionContent } />
          </Card>
        </Content>
      </Container>
    )
  }
}

export default Task