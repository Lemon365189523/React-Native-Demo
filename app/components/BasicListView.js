
import React from 'react';
import {
    ListView,
    View,
    Text,
    StyleSheet
} from 'react-native';
import ScrollCell from './cell/ScrollCell';
import ItemsCell from './cell/ItemsCell';
import Common from '../common/constants';

export default class BasicListView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !==row2
            })
        }
    }
    _renderRow(item){
        let style = {
            backgroundColor: item.backgroundColor,
            width: Common.fit750.fit(item.cellWidth),
            height: Common.fit750.fit(item.cellHeight),
            flex:1
        }

        switch (item.cellId){
            case 'scrollCell':
                return (<ScrollCell style={style} cellData={item.cellData}/>);
                break;
            case 'itemsCell':
                return (<ItemsCell style={style} cellData={item.cellData}/>);
            default:
                return (null)
        }
    }

    componentDidMount(){
        //更新数据源
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.props.layout)
        })
    }

    render (){
        let layout = this.props.layout;
        return (
            <View style={this.props.style}>
                <ListView  //关键在这里，绑定数据dataSource，渲染界面renderRow
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    contentContainerStyle={styles.listView}
                />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    listView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex:1
    }
})