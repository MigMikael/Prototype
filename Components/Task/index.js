import { createStackNavigator, createAppContainer } from 'react-navigation';
import Task from './home'
import CalendarTask from '../CalendarTask/index'
import PatientDetail from '../Patient/PatientDetail'
import Assessment from '../Assessment/index'
import Care from '../Care/index'

export default createStackNavigator({
  Task,
  CalendarTask,
  PatientDetail,
  Assessment
},
{
  initialRouteName: 'Task',
  headerMode: 'none'
})