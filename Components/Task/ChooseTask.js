import React, { Component } from 'react'
import SmallHeader from '../Header/SmallHeader'
import tasks from '../../Data/task'
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

export default class ChooseTask extends Component {
  constructor() {
    super()
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('PatientDetail', {
      message: "assessment success"
    })
  }

  render() {
    const { goBack } = this.props.navigation
    return (
      <Container>
        <SmallHeader navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
          <Card>
            <CardItem>
              <Text>เลือกงานการดูแลผู้ป่วย</Text>
            </CardItem>
            {
              tasks.map((task) => {
                return (
                  <ListItem key={task.id}>
                    <CheckBox checked={task.isCheck} />
                    <Body>
                      <Text>{task.code}  {task.name}</Text>
                    </Body>
                  </ListItem>      
                )
              })
            }
            <CardItem>
              <Button dark block onPress={ this.handleNextPress }>
                <Text>ยืนยัน</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}