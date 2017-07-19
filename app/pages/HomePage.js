
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import SearchBar from '../components/SearchBar';
import {homelayout} from '../actions/homeAction';
import LodingView from '../components/LodingView';
import BasicListView from '../components/BasicListView';
import Common from '../common/constants';

let isLoading = true;

export default class HomePage extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(homelayout(isLoading));
    }

    _navigatorAction(data){
        const { navigate } = this.props.navigation;
        navigate(data.path, data.data);
    }

    render(){
        const {homeReducer} = this.props;
        let layout = homeReducer.layout;
        return(
            <View style={styles.listWrapper}>
                {/*<SearchBar/>*/}
                {homeReducer.isLoading ? <LodingView /> : <BasicListView style={styles.listView} layout={layout} navigatorAction={this._navigatorAction.bind(this)}/>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        flex:1,
        backgroundColor: "#909090",
        minHeight: Common.window.height - 64 - 49,
    },
    listWrapper:{
        flex: 1
    }
})