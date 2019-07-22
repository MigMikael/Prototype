import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'
import PatientDetail from '../Patient/PatientDetail'
import Assessment from '../Assessment/index'
import WoundDetail from '../WoundDetail/index'

export default createStackNavigator({
  Task,
  CalendarTask,
  PatientDetail,
  Assessment,
  WoundDetail
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})