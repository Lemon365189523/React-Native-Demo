
import React from 'react';
import Swiper from 'react-native-swiper';
import  {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class ScrollCell extends React.Component {


    render(){
        const images = this.props.cellData.images;
        return (
            <Swiper height={this.props.style.height} autoplay={true} autoplayTimeout={4}>
                {images.map((image,key)=>{
                    let width = this.props.style.width;
                    let height = this.props.style.height;
                    return(
                        <View style={styles.slide1} key={key}>
                            <Image style={{height:height,width:width}} source={{uri:image}}/>
                        </View>
                    )
                })}
            </Swiper>
        )
    }
}

var styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },

})