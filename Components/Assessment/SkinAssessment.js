import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
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
    Radio
} from 'native-base';

export default class SkinAssessment extends Component {
  constructor() {
    super()

    this.state = {
      isCheck: [true, false, false]
    }
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('PatientAssessment')
  }

  handleRadioPress = (id) => {
    let prevIsCheck = [false, false, false]
    prevIsCheck[id] = !prevIsCheck[id]
    this.setState({
      isCheck: prevIsCheck
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
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>ประเมินผิวหนัง IAD</Text>
              <Text>(ไม่ใช่ปุ่มกระดูก)</Text>
            </CardItem>
            
            <ListItem onPress={() => this.handleRadioPress(0)}>
              <Left style={{ flex: 1 }}>
                <Radio selected={this.state.isCheck[0]} onPress={() => this.handleRadioPress(0)}/>
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>ไม่พบ</Text>
              </Body>
            </ListItem>    
              
            <ListItem onPress={() => this.handleRadioPress(1)}>
              <Left style={{ flex: 1 }}>
                <Radio selected={this.state.isCheck[1]} onPress={() => this.handleRadioPress(1)}/>
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>IAD Category 1</Text>
              </Body>
            </ListItem>

            <ListItem onPress={() => this.handleRadioPress(2)}>
              <Left style={{ flex: 1 }}>
                <Radio selected={this.state.isCheck[2]} onPress={() => this.handleRadioPress(2)}/>
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>IAD Category 2</Text>
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