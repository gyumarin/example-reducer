import OLD from './OLD/view';
import NEW from './NEW/view';
import OLDANDNEW from './view';
import GOREST from './GOREST/view';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const rootSwitchNavigator = createStackNavigator(
  {
    OLDANDNEW,
    OLD,
    NEW,
    GOREST,
  },
  {
    initialRouteName: 'OLDANDNEW',
  },
);

const RootSwitchNavigation = createAppContainer(rootSwitchNavigator);
export default RootSwitchNavigation;
