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
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChooseTask')
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTab={true} navigation={this.props.navigation}/> 
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered style={{ flexDirection: 'column'}}>
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>สถานะผู้ป่วย</Text>
            </CardItem>
            <Separator bordered>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>On Medical Device (เลือกได้มากกว่า 1 ข้อ)</Text>
            </Separator>   
            {
              medicalDevices.map((device) => {
                return (
                  <ListItem key={device.id}>
                    <CheckBox checked={device.isCheck} />
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
            <ListItem>
              <Radio selected={false} />
              <Body>
                <Text>ไม่มี</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Radio selected={false} />
              <Body>
                <Text>กลั้นปัสสาวะไม่ได้</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Radio selected={false} />
              <Body>
                <Text>กลั้นอุจจาระไม่ได้</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Radio selected={true} />
              <Body>
                <Text>กลั้นอุจจาระและปัสสาวะไม่ได้</Text>
              </Body>
            </ListItem>
            <CardItem>
              <Left/>
              <Body>
                <Button dark block onPress={ this.handleNextPress }>
                  <Text>ต่อไป</Text>
                </Button>
              </Body>
              <Right/>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}