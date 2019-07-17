import React, { Component } from 'react'
import { 
  Left, 
  Right, 
  Body,
  Text,
  ListItem,
  Thumbnail
} from 'native-base';

export default class SmallCard extends Component {
  render() {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail source={ require('../../assets/inpitar.jpg') } />
        </Left>
        <Body>
          <Text>Kumar Pratik</Text>
          <Text note>Doing what you like will always keep you happy . .</Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    )
  }
}