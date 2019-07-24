import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'
import PatientDetail from '../Patient/PatientDetail'
import Assessment from '../Assessment/index'
import WoundDetail from '../WoundDetail/index'
import HarshPosition from '../Wound/Add/HarshPosition'
import ChoosePosition from '../Wound/Add/ChoosePosition'
import AccuratePosition from '../Wound/Add/AccuratePosition'

export default createStackNavigator({
  Task,
  CalendarTask,
  PatientDetail,
  Assessment,
  WoundDetail,
  HarshPosition,
  ChoosePosition,
  AccuratePosition
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})