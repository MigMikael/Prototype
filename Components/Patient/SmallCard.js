import React, { Component } from 'react'
import { 
  Left, 
  Right, 
  Body,
  Text,
  ListItem,
  Thumbnail,
  Card,
  Badge,
  Icon
} from 'native-base';

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import { thisExpression } from '@babel/types';

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
          <Text style={{ fontSize: 17 }}>{this.props.patient.name} (Braden = {this.props.patient.braden})</Text>
          <Text note>
            AN: {this.props.patient.an}
          </Text>
          <Text note>
            {this.props.patient.gender === 'male' ? `ชาย`: `หญิง`} {this.props.patient.age} ปี
          </Text>
        </Body>
        <Right>
          {
            this.props.patient.isTakeCare ? 
              <Icon active name='checkmark-circle' style={{ color: "#00ff00"}} />
            :
              <Icon active name='close-circle' style={{ color: "#fbc02d"}} />
          }
          {
            this.props.patient.braden <= 8 ?
            <Icon name='alarm' style={{ color: "#ff0000"}}/>
            :
            null
          }
        </Right>
      </ListItem>
    )
  }
}