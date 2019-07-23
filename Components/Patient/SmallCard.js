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

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'

export default class SmallCard extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const nav = this.props.nav
    const imgArray = [img1, img2, img3, img4, img5, img6, img7]

    return (
      <ListItem avatar onPress={ () => nav('PatientDetail') }>
        <Left>
          <Thumbnail source={ imgArray[this.props.patient.id-1] } />
        </Left>
        <Body>
          <Text>{this.props.patient.name}</Text>
          <Text note>HN: {this.props.patient.hn}</Text>
          <Text note>AN: {this.props.patient.an}</Text>
          {/* <Text note>Age: {this.props.patient.age}</Text> */}
        </Body>
        <Right>
          {
            this.props.patient.isTakeCare ? 
            <Badge style={{ backgroundColor: '#00ff00' }}>
              <Text style={{ fontWeight: 'bold' }}>O</Text>
            </Badge>
            :
            <Badge style={{ backgroundColor: '#fbc02d' }}>
              <Text style={{ fontWeight: 'bold' }}>! </Text>
            </Badge>
          }
          
        </Right>
      </ListItem>
    )
  }
}