import React, { Component } from 'react'
import { 
  Left, 
  Right, 
  Body,
  Text,
  ListItem,
  Thumbnail,
  Card,
  Badge
} from 'native-base';

export default class SmallCard extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const nav = this.props.nav
    return (
      <ListItem avatar onPress={ () => nav('PatientDetail') }>
        <Left>
          <Thumbnail source={ require('../../assets/inpitar.jpg') } />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
          <Badge style={{ backgroundColor: '#fbc02d' }}>
            <Text style={{ fontWeight: 'bold' }}>!</Text>
          </Badge>
        </Right>
      </ListItem>
    )
  }
}