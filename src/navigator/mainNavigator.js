import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings188945Navigator from '../features/Settings188945/navigator';
import UserProfile188943Navigator from '../features/UserProfile188943/navigator';
import Settings188906Navigator from '../features/Settings188906/navigator';
import SignIn21188901Navigator from '../features/SignIn21188901/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings188945: { screen: Settings188945Navigator },
UserProfile188943: { screen: UserProfile188943Navigator },
Settings188906: { screen: Settings188906Navigator },
SignIn21188901: { screen: SignIn21188901Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
