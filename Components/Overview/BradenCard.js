import React, { Component } from 'react'
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
    Card,
    CardItem,
    ListItem
} from 'native-base';

export default class BradenCard extends Component {
    render() {
        const nav = this.props.nav
        return (
            <ListItem bordered style={{ flex:4 }} button onPress={() => nav('BradenDetail')}>
                <Body style={{ flex: 3, flexDirection: 'row' }}>
                    <Text >วันที่ {this.props.braden.day}</Text>
                    <Text style={{ fontWeight: 'bold' }}>  Braden Score: {this.props.braden.score}</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                    <Text>></Text>
                </Right>
            </ListItem>
        )
    }
}