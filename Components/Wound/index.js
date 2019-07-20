import React, { Component } from 'react'
import WoundCard from './WoundCard'
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
    CheckBox
} from 'native-base';

class Wound extends Component {
    render() {
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <WoundCard />
                <WoundCard />
                <WoundCard />
                <WoundCard />
                <WoundCard />
            </Content>
        )
    }
}

export default Wound