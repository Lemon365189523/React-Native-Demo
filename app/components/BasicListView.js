
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import ScrollCell from './cell/ScrollCell';
import ItemsCell from './cell/ItemsCell';
import ScrollTextCell from './cell/ScrollTextCell';
import Common from '../common/constants';

export default class BasicListView extends React.Component {
    constructor(props){
        super(props);
        // this.state = {
        //     dataSource: new ListView.DataSource({
        //         rowHasChanged: (row1,row2) => row1 !==row2
        //     })
        // }
    }
    _renderRow(obj){
        let item = obj.item;
        let key = obj.index;
        console.log(key);
        let style = {
            backgroundColor: item.backgroundColor,
            width: Common.fit750.fit(item.cellWidth),
            height: item.cellHeight>0 ? Common.fit750.fit(item.cellHeight) : "auto",
            flex:1
        }

        switch (item.cellId){
            case 'scrollCell':
                return (<ScrollCell style={style} cellData={item.cellData} key={key}/>);
                break;
            case 'itemsCell':
                return (<ItemsCell style={style} cellData={item.cellData} key={key}/>);
                break;
            case 'scrollTextCell':
                return (<ScrollTextCell style={style} cellData={item.cellData} key={key}/>);
                break;
            default:
                return (null)
        }
    }


    render (){
        return (
            <View style={this.props.style}>
                <FlatList
                    data={this.props.layout}
                    renderItem={this._renderRow.bind(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        flex:1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
})