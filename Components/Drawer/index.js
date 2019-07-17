import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Login from '../Login/index';
import Search from '../Search/index';
import Task from '../Task/index'

const AppNavigator = createDrawerNavigator({
  Search,
  Task,
  Login,
},
{
  initialRouteName: 'Login',
});

export default createAppContainer(AppNavigator);