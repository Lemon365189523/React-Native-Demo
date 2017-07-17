
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import Common from '../../common/constants';

export default class ItemsCell extends React.Component{

    _renderItem(item,key){
        const column = this.props.cellData.column;
        const width = Common.window.width / column;
        return(
            <TouchableOpacity key={key} onPress={()=>{console.log("点击item")}}>
                <View style={styles.item}  width={width}>
                    <Image source={require("../../images/icon_saoyisao.png")} />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render(){
        const items = this.props.cellData.items;

        return(
            <View style={styles.wrapper}>
                {items.map((item,key)=>{
                    return (this._renderItem(item,key));
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex',
        flex:1,
        flexDirection:'row',
        flexWrap: 'wrap',
        backgroundColor:'#098',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    item:{
        // backgroundColor:'#564545',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        paddingTop: 15
    }
})
