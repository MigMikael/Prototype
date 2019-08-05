import { createStackNavigator, createAppContainer } from 'react-navigation';
import Scan from '../Scan/index'
import Patient from '../Patient/index'
import CalendarTask from '../CalendarTask/home'

export default createStackNavigator({
  Scan,
  CalendarTask,
  Patient
},
{
  initialRouteName: 'CalendarTask',
  headerMode: 'none'
})