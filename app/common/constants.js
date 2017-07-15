/**
* 放置常量
*/

import {Dimensions} from 'react-native';

let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

let colors = {
    themeColor: 'rgb(217, 51, 58)',
    blue: '#3498db',
}

let fit750 = {
    fit:(num)=>{
        return ((num)*window.width/750.00);
    }
}

export default {
    window: window,
    colors: colors,
    fit750: fit750
}