import React, { Component } from 'react'
import WoundCard from '../Wound/WoundCard'
import wounds from '../../Data/wound'
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

class History extends Component {
    render() {
        const nav = this.props.nav
        return(
            <Content padder style={{ backgroundColor: "#e5e5e5" }}>
                {
                    wounds.filter(wound => {
                        return wound.status === 'archrive'
                    }).map(wound => {
                        return(
                            <WoundCard nav={nav} history={false} wound={wound} />
                        )
                    })
                }
            </Content>
        )
    }
}

export default History