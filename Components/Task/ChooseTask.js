import React, { Component } from 'react'
import LargeHeader from '../Header/LargeHeader'
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

    this.state = {
      taskList : tasks
    }
  }

  handleNextPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('PatientDetail', {
      message: "assessment success"
    })
  }

  handleCheckBoxPress = (id) => {
    let oldList = this.state.taskList
    oldList[id-1].isCheck = !oldList[id-1].isCheck

    this.setState({
      taskList: oldList
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
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>เลือกงานการดูแลผู้ป่วย</Text>
            </CardItem>
            {
              this.state.taskList.map((task) => {
                return (
                  <ListItem key={task.id} onPress={() => this.handleCheckBoxPress(task.id)}>
                    <CheckBox checked={task.isCheck} onPress={() => this.handleCheckBoxPress(task.id)} />
                    <Body>
                      <Text>{task.code}  {task.name}</Text>
                    </Body>
                  </ListItem>      
                )
              })
            }
            <CardItem>
              <Body>
                <Button dark block onPress={ this.handleNextPress }>
                  <Text>ยืนยัน</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}