
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    InteractionManager
} from 'react-native';
import ScrollCell from './cell/ScrollCell';
import ItemsCell from './cell/ItemsCell';
import ScrollTextCell from './cell/ScrollTextCell';
import Common from '../../../../../Documents/KADiOS/iOS/App/common/constants';

export default class BasicListView extends React.Component {
    constructor(props){
        super(props);

    }
    _renderRow(obj){
        let item = obj.item;
        let key = obj.index;
        let style = {
            backgroundColor: item.backgroundColor,
            width: Common.fit750.fit(item.cellWidth),
            height: item.cellHeight>0 ? Common.fit750.fit(item.cellHeight) : "auto",
            flex:1
        }
        //点击回调以后做path的管理
        switch (item.cellId){
            case 'scrollCell':
                return (<ScrollCell style={style} cellData={item.cellData} key={key} />);
                break;
            case 'itemsCell':
                return (<ItemsCell style={style} cellData={item.cellData} key={key}
                                   handleClick={this._clickItem.bind(this)}/>);
                break;
            case 'scrollTextCell':
                return (<ScrollTextCell style={style} cellData={item.cellData} key={key}/>);
                break;
            case 'line':
                return (<View style={style}/>)
                break;

            default:
                return (null)
        }
    }

    //点击了item
    _clickItem(data){
      if (this.props.navigatorAction){
          this.props.navigatorAction({
              path: 'Product',
              data: data
          })
      }
    }


    render (){

        return (
            <View style={this.props.style}>
                <FlatList
                    data={this.props.layout}
                    renderItem={this._renderRow.bind(this)}
                    // refreshing={this.props.refreshing}
                    // onRefresh={this.props.onRefresh}
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