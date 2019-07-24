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
    CheckBox,
} from 'native-base';

class Wound extends Component {
    render() {
        const nav = this.props.nav
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                <WoundCard nav={nav} />
                <WoundCard nav={nav} />
                <WoundCard nav={nav} />
                <WoundCard nav={nav} />
                <WoundCard nav={nav} />
            </Content>
        )
    }
}

export default Wound