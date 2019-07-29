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
    CardItem
} from 'native-base';

export default class BradenCard extends Component {
    render() {
        const nav = this.props.nav
        return (
            <Card>
                <CardItem header bordered style={{ flex:1 }} button onPress={() => nav('BradenDetail')}>
                    <Body style={{ flex: 3, flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}>วันที่ {this.props.braden.day}</Text>
                        <Text style={{ flex: 1, fontWeight: 'bold' }}>  Braden Score: {this.props.braden.score}</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Text>></Text>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}