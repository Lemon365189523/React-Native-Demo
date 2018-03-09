import {
    Image,
    StyleSheet
} from 'react-native';
import HomeContainer from './HomeContainer';
import CategoryContainer from './CategoryContainer';
import Common from '../../../../../Documents/KADiOS/iOS/App/common/constants';
import Images from '../images/images';
import  {
    TabNavigator,
    TabBarBottom
} from 'react-navigation';

const Tab = TabNavigator(
    {
        Home:{
            screen:HomeContainer,

        },
        Category:{
            screen:CategoryContainer,

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

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})