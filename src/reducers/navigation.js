
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

import Component1 from '../components/component1'
import Component2 from '../components/component2'
import Component3 from '../components/component3'
//if I move these 2 variables anywhere router becomes undefined... T__T
const AppRouteConfig = {
  Component1:{
    screen: Component1,
    // navigationOptions:{header:()=>null}
  },
  Component2: {
    screen: Component2,
    // navigationOptions:{header:()=>null}
  },
  Component3: {
    screen: Component3,
    // navigationOptions:{header:()=>null}
  },
};

const NavigatorConfig = {
  headerMode: 'float',
  mode: 'modal',
  navigationOptions: {
    title: 'you are welcome',
    gesturesEnabled: false,
    headerStyle: { backgroundColor: '#2196f3' },
		headerTintColor: '#fff',
    headerBackTitle: 'back',
  }
}


export const AppNavigator = StackNavigator(AppRouteConfig, NavigatorConfig);

const navState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Component1'));

const nav = (state = navState, action) => {
  let nextState;
  switch (action.type) {
  case 'NAVIGATE':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: action.screen }),
      state
    );
    break;
  case 'Navigation/BACK':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.back(),
      state
    );
    break;
  case 'NAVIGATE_RESET':
    nextState = AppNavigator.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [NavigationActions.navigate({ routeName: 'Component1' })]
      }),
      state
    );
    break;
  default:
    break;
  }
  return nextState || state;
};
///////////////////////////HAVE TO PLACE IT HERE///////////////////
export default nav;
