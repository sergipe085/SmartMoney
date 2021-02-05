import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Main from './pages/Main'
import NewEntry from './pages/NewEntry'
import Report from './pages/Report'

const Routes = createAppContainer(createSwitchNavigator(
    {
        Main: Main, 
        NewEntry: NewEntry, 
        Report: Report,
    }, {
        initialRouteName: 'Main',
        backBehavior: 'order',
    }
));

export default Routes;