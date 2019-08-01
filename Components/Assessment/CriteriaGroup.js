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
    CheckBox
} from 'native-base';

export default class CriteriaGroup extends Component {
  constructor() {
    super()
    this.state = {
      risk: riskCriteria
    }
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('SkinAssessment')
  }

  handleCheckboxPress = (id) => {
    console.log(id);
    let riskArr = this.state.risk
    riskArr[id - 1].isCheck = !riskArr[id - 1].isCheck 

    this.setState({
      risk: riskArr
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
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Criteria กลุ่มเสี่ยง</Text>
              <Text>(เลือกได้มากกว่า 1 ข้อ)</Text>
            </CardItem>
            {
              this.state.risk.map((criteria) => {
                return (
                  <ListItem key={criteria.id} onPress={() => this.handleCheckboxPress(criteria.id)}>
                    <CheckBox checked={criteria.isCheck} onPress={() => this.handleCheckboxPress(criteria.id)} />
                    <Body>
                      <Text>{criteria.criteria}</Text>
                    </Body>
                  </ListItem>      
                )
              })
            }
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