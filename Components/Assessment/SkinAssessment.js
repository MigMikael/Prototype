import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
import riskCriteria from '../../Data/riskCriteria'
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
              <Text style={{ fontSize: 21, fontWeight: 'bold' }}>ประเมินผิวหนัง IAD</Text>
              <Text>(ไม่ใช่ปุ่มกระดูก)</Text>
            </CardItem>
            
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={true} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>ไม่พบ</Text>
              </Body>
            </ListItem>    
              
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={false} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>IAD Category 1</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={false} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>IAD Category 2</Text>
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