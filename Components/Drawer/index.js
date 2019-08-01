import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login/index';
import Search from '../Search/index';
import Task from '../Task/index';
import Setting from '../Setting/index';
import Scan from '../Scan/index'
import PatientDetail from '../Patient/PatientDetail'

const AppNavigator = createDrawerNavigator({
  Search,
  Task,
  Setting,
  Login,
  PatientDetail
},
{
  initialRouteName: 'Search',
});

export default createAppContainer(AppNavigator);