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
    return (
        <ListItem bordered>
            <TouchableOpacity onPress={ this.handlePlusPress }>
                <Icon active name='add-circle' style={{ color: "#000000"}} />
            </TouchableOpacity>
            <Body>
                <Text>{this.props.task.name}</Text>
            </Body>
            {
                this.state.count > 0 ? 
                <TouchableOpacity onLongPress={ this.handleMinusPress }>
                    <Badge success>
                        <Text>{this.state.count}</Text>
                    </Badge>    
                </TouchableOpacity>
                : 
                <Badge danger>
                    <Text>{this.state.count}</Text>
                </Badge>
            }
        </ListItem>
    )
  }
}