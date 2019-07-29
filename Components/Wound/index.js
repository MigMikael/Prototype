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
                <WoundCard nav={nav} history={false} image={1} />
                <WoundCard nav={nav} history={false} image={1} />
                <WoundCard nav={nav} history={false} image={2} />
                <WoundCard nav={nav} history={false} image={3} />
                <WoundCard nav={nav} history={false} image={4} />
            </Content>
        )
    }
}

export default Wound