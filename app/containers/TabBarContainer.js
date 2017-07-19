import {
    Image
} from 'react-native';
import HomeContainer from './HomeContainer';
import CategoryContainer from './CategoryContainer';

import Common from '../common/constants';
import Images from '../images/images';
import  {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

const Tab = TabNavigator(
    {
        Home:{
            screen:HomeContainer,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'首页',

            }),
        },

        Mine:{
            screen:CategoryContainer,
            navigationOptions:({navigation}) => ({
                tabBarLabel:'我',
            }),
        },
    },

    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        tabBarOptions:{
            activeTintColor: Common.colors.blue,
            inactiveTintColor:'#979797',
            style:{backgroundColor:'#ffffff',},
            // labelStyle: {
            //     fontSize: 15, // 文字大小
            // },
        }

    }

);

export default Tab;