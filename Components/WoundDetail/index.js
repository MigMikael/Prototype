import React, { Component } from 'react';
import HistoryCard from '../Wound/HistoryCard'
import LargeHeader from '../Header/LargeHeader'
import * as Progress from 'react-native-progress';
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
  Tab, 
  Tabs,
  Thumbnail,
  View,
  Card,
  CardItem
} from 'native-base';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'

import { Dimensions } from 'react-native'
import Wound from '../Wound';
import { TouchableOpacity } from 'react-native-gesture-handler';

class WoundDetail extends Component {

  handleAssessmentPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('ChoosePicture')
  }

  handleHistoryCardPress = () => {
    const { navigation: { navigate }} = this.props
    navigate('TreatmentDetail')
  }

  render() {
    const { navigation: { navigate }} = this.props
    const { goBack } = this.props.navigation
    return (
      <Container>
        <LargeHeader hasTab={false} navigation={this.props.navigation}/>
        <Content padder style={{ backgroundColor: "#e5e5e5" }}>
            <Card>
                <CardItem header>
                  <Text style={{ fontWeight: 'bold', fontSize: 21 }}>Presure Ulcer Healing History</Text>
                </CardItem>
                <CardItem style={{
                    paddingLeft: "2%",
                    paddingRight: "2%",
                    paddingTop: "2%",
                    paddingBottom: "2%"
                }}>
                    <LineChart
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ],
                                color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})` 
                            }]
                        }}
                        width={ Dimensions.get('window').width * 0.9 }
                        height={220}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </CardItem>
                <CardItem>
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button primary full style={{ flex: 1, justifyContent: 'center' }}>
                      <Text>ออกรายงาน</Text>
                    </Button>
                    <Button info full style={{ flex: 1, justifyContent: 'center' }} onPress={ this.handleAssessmentPress }>
                      <Text>ประเมินแผล</Text>
                    </Button>
                  </View>
                </CardItem>
            </Card>
            <TouchableOpacity onPress={ this.handleHistoryCardPress }>
              <HistoryCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.handleHistoryCardPress }>
              <HistoryCard />
            </TouchableOpacity>
            <TouchableOpacity onPress={ this.handleHistoryCardPress }>
              <HistoryCard />
            </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default WoundDetail