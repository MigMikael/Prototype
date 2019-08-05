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
  Icon,
  View
} from 'native-base';
import bradenColors from '../../Data/bradenColor'

import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/4.jpg'
import img5 from '../../assets/5.jpg'
import img6 from '../../assets/6.jpg'
import img7 from '../../assets/7.jpg'
import img8 from '../../assets/8.jpg'
import { thisExpression } from '@babel/types';

export default class SmallCard extends Component {

  constructor(props){
    super(props);
  }

  handleGroupColor = (braden) => {
    let group = 0
    if (braden >= 19) {
      group = 4
    } else if (braden >= 15) {
      group = 3
    } else if (braden >= 13) {
      group = 2
    } else if (braden >= 10) {
      group = 1
    } else if (braden < 10) {
      group = 0
    }
    let color = bradenColors[group]
    return color
  }

  handleBraden = (braden) => {
    if (braden < 10) {
      return " " + braden.toString()
    } else {
      return braden.toString()
    }
  }

  render() {
    const nav = this.props.nav
    const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8]
    const style = {
      circle: {
        width: 67,
        height: 67,
        borderRadius: 67/2,
        justifyContent: 'center', 
        alignItems: 'center'
      },
    }
    const color = this.handleGroupColor(this.props.patient.braden)
    const bradenStr = this.handleBraden(this.props.patient.braden)
    return (
      <ListItem avatar onPress={ () => nav('PatientDetail') } style={{ 
        paddingLeft: '1%', 
        marginLeft: '1%', 
        paddingTop: 0, 
        marginTop: 0,
        paddingRight: 0,
        marginRight: 0 
      }}>
        <Left style={{ flex: 6 }}>
          <View style={{ backgroundColor: color, ...style.circle }}>
            <Thumbnail source={ imgArray[this.props.patient.id-1] } />
          </View>
        </Left>
        <Body style={{ flex: 17 }}>
          <Text>{this.props.patient.name}</Text>
          <Text note>
            AN: {this.props.patient.an}
          </Text>
          <Text note>
            {this.props.patient.gender === 'male' ? `ชาย`: `หญิง`} {this.props.patient.age} ปี
          </Text>
        </Body>
        <View style={{
          height: "80%",
          borderRightColor: "#e5e5e5",
          borderRightWidth: 1,
          marginRight: "1%"
        }}/>
        <Right style={{ flex: 5, alignItems: 'flex-start' }}>
          <Text note style={{ paddingBottom: '2%'}}>
            Braden:
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: '5%' }}>
            <Text style={{ fontSize: 19, fontWeight: 'bold', paddingRight: '10%' }}>{bradenStr}</Text>
            <View>
              {
                this.props.patient.isTakeCare ? 
                  <Icon name='checkmark-circle' style={{ color: "#00ff00"}} />
                :
                  <Icon name='alert' style={{ color: "#fbc02d"}} />
              }
              {/* {
                this.props.patient.braden <= 8 ?
                <Icon name='alarm' style={{ color: "#ff0000"}}/>
                :
                null
              } */}
            </View>
          </View>
        </Right>
      </ListItem>
    )
  }
}