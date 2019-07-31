import React, { Component } from 'react'
import SmallHeader from '../../Header/SmallHeader'
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

export default class ChooseCause extends Component {
  constructor() {
    super()
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChooseSeverity')
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/> 
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem bordered style={{ flexDirection: 'column'}}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>สาเหตุของการเกิดแผล</Text>
            </CardItem>
            
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={true} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>เกิดจากที่บ้าน</Text>
              </Body>
            </ListItem>    
              
            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={false} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>PU Related Medical device</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={false} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>Mucosal Membrane Pressure Ulcer</Text>
              </Body>
            </ListItem>

            <ListItem>
              <Left style={{ flex: 1 }}>
                <Radio selected={false} />
              </Left>
              <Body style={{ flex: 9 }}>
                <Text>อื่นๆ</Text>
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