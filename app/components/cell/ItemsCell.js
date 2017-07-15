
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';

export default class ItemsCell extends React.Component{

    _renderItem(item,key){
        return(
            <View style={styles.item} key={key}>
                <Image source={require("../../images/icon_saoyisao.png")}/>
                <Text>{item.title}</Text>
            </View>
        )
    }

    render(){
        const items = this.props.cellData.items;
        const column = this.props.cellData.column;

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

    },
    item:{
        flex:1,
        backgroundColor:'#564545',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
