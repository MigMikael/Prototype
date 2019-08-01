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
        count: 0
    }
    this.handlePlusPress = this.handlePlusPress.bind(this)
    this.handleMinusPress = this.handleMinusPress.bind(this)
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

  handleMinusPress() {
    this.setState(prevState => {
        if (prevState.count !== 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return {
                count: 0
            }
        }
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
        <ListItem bordered onPress={ this.handlePlusPress } onLongPress={ this.handleMinusPress }>
            <Button primary rounded onPress={ this.handlePlusPress }>
                <Icon active name='add' style={{ color: "#ffffff"}} />
            </Button>
            <Body>
                <Text>{this.props.task.code} {this.props.task.name}</Text>
            </Body>
            {
                this.state.count > 0 ? 
                <View style={{ flexDirection: 'column', alignItems: 'flex-end'}}>
                    {/* <Badge success style={{ flex: 1 }}>
                        <Text>{this.state.count}</Text>
                    </Badge>     */}
                    <Icon active name='checkmark-circle' style={{ color: "#00ff00"}} />
                    <Text note style={{ flex: 1 }}>{hours}.{min}</Text>
                </View>
                : 
                // <Badge danger>
                //     <Text>{this.state.count}</Text>
                // </Badge>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end'}}>
                    <Icon active name='close-circle' style={{ color: "#fbc02d"}} />
                    <Text note style={{ flex: 1 }}></Text>
                </View>
            }
        </ListItem>
    )
  }
}