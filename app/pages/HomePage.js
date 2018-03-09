
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
import Common from '../../../../../Documents/KADiOS/iOS/App/common/constants';

let isLoading = true;
let isRefreshing = false

export default class HomePage extends React.Component{

    componentDidMount(){
        const {dispatch} = this.props;
        //请求数据
        dispatch(homelayout(isLoading, isRefreshing));
    }

    _navigatorAction(data){
        const { navigate } = this.props.navigation;
        navigate(data.path, data.data);
    }

    _onRefresh(){
        console.log('正在刷新');
        isRefreshing = true;
        const {dispatch} = this.props;
        dispatch(homelayout(isLoading, isRefreshing));
    }

    render(){
        const {homeReducer} = this.props;
        let layout = homeReducer.layout;
        return(
            <View style={styles.listWrapper}>
                {
                    homeReducer.isLoading ?
                    <LodingView /> :
                    <BasicListView
                        style={styles.listView}
                        layout={layout}
                        navigatorAction={this._navigatorAction.bind(this)}
                        refreshing={homeReducer.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        flex:1,
        minHeight: Common.window.height - 64 - 49,
    },
    listWrapper:{
        flex: 1
    }
})