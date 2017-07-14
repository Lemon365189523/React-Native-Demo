import React, {Component} from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Images from '../images/images';
const Item = TabNavigator.Item;

import HomeContainer from './HomeContainer';
import CategoryContainer from './CategoryContainer';

export default class AppMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab:'home'
        }
    }

    render(){
        return(
            <TabNavigator>
               <Item
                   title="首页"
                   selected={this.state.selectedTab === 'home'}
                   selectedTitleStyle={styles.selectedTextStyle}
                   titleStyle={styles.textStyle}
                   renderIcon={()=> <Image source={Images.home} style={styles.iconStyle}/>}
                   renderSelectedIcon={() => <Image source={Images.homeSelected} style={styles.iconStyle}/>}
                   onPress={() => this.setState({ selectedTab: 'home' })}
               >
                   <HomeContainer/>
               </Item>
                <Item
                    title="分类"
                    selected={this.state.selectedTab === 'category'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={()=> <Image source={Images.category} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.categorySelected} style={styles.iconStyle}/>}
                    onPress={() => this.setState({ selectedTab: 'category' })}
                >
                    <CategoryContainer/>
                </Item>
            </TabNavigator>
        )
    }

}

const styles=StyleSheet.create({
    iconStyle:{
        width:26,
        height:26,
    },
    textStyle:{
        color:'#2c3e50',
    },
    selectedTextStyle:{
        color:'#3498db',
    }
});