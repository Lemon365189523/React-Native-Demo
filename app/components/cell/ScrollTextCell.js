
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import images from '../../images/images';

export default class ScrollTextCell extends React.Component{
    render(){
        const text = this.props.cellData.text;
        return(
            text.length > 0 ?
            <View style={[this.props.style, styles.wrapper]}>
                <Image source={images.scan} style={styles.image}/>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View> :
                <View>

                </View>
        )
    }
}


const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: '#ffff',
        height: 50,
        justifyContent : 'flex-start',
        alignItems : 'center',
        flexDirection : 'row',
        paddingLeft: 10
    },
    image: {
        width: 30,
        height: 30,
        backgroundColor: '#454545',
    },
    text: {
        paddingLeft: 10
    }
});