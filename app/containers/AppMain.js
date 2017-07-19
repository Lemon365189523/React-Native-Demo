
import ProductContainer from './ProductContainer';
import TabBarContainer from './TabBarContainer';

import  {
    StackNavigator,
} from 'react-navigation';


//首页导航设置
const HomeNavigator = StackNavigator({
    Main: {
        //首页为有TabBar的容器
        screen: TabBarContainer,
    },
    Product: {
        screen: ProductContainer,
        path: 'Product'
    },
},{
    // headerMode: 'none',

})

export default HomeNavigator;

