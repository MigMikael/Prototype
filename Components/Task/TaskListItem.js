import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
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
    Badge
} from 'native-base';

export default class TaskListItem extends Component {
  constructor() {
    super()
    this.state = {
        count: 0,
        showCard: true
    }
    this.handlePlusPress = this.handlePlusPress.bind(this)
    this.handleLongPress = this.handleLongPress.bind(this)
    this.handleDeletePress =  this.handleDeletePress.bind(this)
    this.handleBackPress = this.handleBackPress.bind(this)
  }

  zeroPad(num, places) {
    let zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  componentDidMount() {
    this.setState({
        count: this.props.task.count
    })
  }

  handlePlusPress() {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
        }
    })
  }

  handleLongPress() {
    this.setState(prevState => {
        return {
            showCard: !prevState.showCard
        }
    })
  }

  handleBackPress() {
    this.setState({
        showCard: true
    })  
  }

  handleDeletePress() {
    this.setState({
        count: 0,
        showCard: true
    })
  }

  render() {
    let hours = new Date().getHours(); //Current Hours
    let min = new Date().getMinutes(); //Current Minutes
    if (hours.toString().length == 1) {
        hours = this.zeroPad(hours, 2)
    }

    if (min.toString().length == 1) {
        min = this.zeroPad(min, 2)
    }

    return (
        <View>
            { 
                this.state.showCard ?
                <ListItem bordered onLongPress={ this.handleLongPress } style={{ flexDirection: 'row', height: 80 }}>
                    {
                        this.state.count > 0 ? 
                        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 3 }}>
                            <Icon active name='checkmark-circle' style={{ color: "#00ff00"}} />
                            <Text note style={{ flex: 1 }}>{hours}.{min} น.</Text>
                        </View>
                        : 
                        <View style={{ flexDirection: 'column', alignItems: 'center', flex: 3 }}>
                            <Icon active name='alert' style={{ color: "#fbc02d"}} />
                            {/* <Text note style={{ flex: 1 }}></Text> */}
                        </View>
                    }
                    <Body style={{ alignItems: 'flex-start', flex: 12 }}>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>{this.props.task.code}</Text>  {this.props.task.name}
                        </Text>
                    </Body>
                    <Right style={{ flex: 3 }}>
                        <Button info small onPress={ this.handlePlusPress }>
                            <Icon name="save" />
                        </Button>
                    </Right>
                </ListItem>
                :
                <TouchableOpacity onPress={ this.handleBackPress }>
                    <CardItem style={{ flexDirection: 'row', backgroundColor: "#f5f5f5", paddingLeft: '5%', height: 80 }}>
                        {/* <Left>
                            <Button danger block onPress={ this.handleDeletePress }>
                                <Icon name="trash"/>
                                <Text>ลบการบันทีกครั้งล่าสุด</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent block onPress={ this.handleBackPress }>
                                <Icon name="close"/>
                            </Button>
                        </Right> */}
                        <Body style={{ alignItems: 'flex-start', flex: 5 }}>
                            <Button danger block onPress={ this.handleDeletePress }>
                                <Text>ลบการบันทีกครั้งล่าสุด</Text>
                            </Button>
                        </Body>
                        <Right style={{ flex: 5 }}>
                            <Button transparent block onPress={ this.handleBackPress }>
                                <Icon name="close"/>
                            </Button>
                        </Right>
                    </CardItem>
                </TouchableOpacity>
            }
        </View>
    )
  }
}