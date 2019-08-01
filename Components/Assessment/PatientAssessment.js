import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
import medicalDevices from '../../Data/medicalDevice'
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
    Label,
    CheckBox,
    Radio,
    Separator
} from 'native-base';

export default class PatientAssessment extends Component {
  constructor() {
    super()
    this.state = {
      medicalDeviceList: medicalDevices,
      incontinentList: [false, false, false, true]
    }
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChooseTask')
  }

  handleCheckboxPress = (id) => {
    let oldList = this.state.medicalDeviceList
    oldList[id-1].isCheck = !oldList[id-1].isCheck

    this.setState({
      medicalDeviceList: oldList
    })
  }

  handleRadioPress = (id) => {
    let oldList = [false, false, false, false]
    oldList[id] = !oldList[id]
    this.setState({
      incontinentList: oldList
    })
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTab={true} navigation={this.props.navigation}/> 
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered style={{ flexDirection: 'column'}}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>สถานะผู้ป่วย</Text>
            </CardItem>
            <Separator bordered>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>On Medical Device (เลือกได้มากกว่า 1 ข้อ)</Text>
            </Separator>   
            {
              this.state.medicalDeviceList.map((device) => {
                return (
                  <ListItem key={device.id} onPress={() => this.handleCheckboxPress(device.id)}>
                    <CheckBox checked={device.isCheck} onPress={() => this.handleCheckboxPress(device.id)}/>
                    <Body>
                      <Text>{device.name}</Text>
                    </Body>
                  </ListItem>      
                )
              })
            }
            <Separator bordered>
              <Text style={{ fontWeight: 'bold', fontSize: 15  }}>ปัญหา Incontinent</Text>
            </Separator>
            <ListItem onPress={() => this.handleRadioPress(0)}>
              <Radio selected={this.state.incontinentList[0]} onPress={() => this.handleRadioPress(0)}/>
              <Body>
                <Text>ไม่มี</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.handleRadioPress(1)}>
              <Radio selected={this.state.incontinentList[1]} onPress={() => this.handleRadioPress(1)}/>
              <Body>
                <Text>กลั้นปัสสาวะไม่ได้</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.handleRadioPress(2)}>
              <Radio selected={this.state.incontinentList[2]} onPress={() => this.handleRadioPress(2)}/>
              <Body>
                <Text>กลั้นอุจจาระไม่ได้</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => this.handleRadioPress(3)}>
              <Radio selected={this.state.incontinentList[3]} onPress={() => this.handleRadioPress(3)}/>
              <Body>
                <Text>กลั้นอุจจาระและปัสสาวะไม่ได้</Text>
              </Body>
            </ListItem>
            <CardItem>
              <Body>
                <Button dark block onPress={ this.handleNextPress }>
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