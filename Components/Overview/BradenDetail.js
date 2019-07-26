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
    CheckBox
} from 'native-base';

export default class BradenDetail extends Component {
  constructor() {
    super()
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTab={false} navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem>
              <Text>วันที่ 02/ม.ค./2562</Text>
              <Text>Braden Score : 13 </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}