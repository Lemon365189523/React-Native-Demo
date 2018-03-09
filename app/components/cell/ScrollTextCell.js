
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    Animated
} from 'react-native';
import images from '../../images/images';
import Common from '../../../../../../Documents/KADiOS/iOS/App/common/constants';

export default class ScrollTextCell extends React.Component{

    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0);
        this.state = {
            textWidth: 0,
            startAnimated: false
        }
    }

    // _startAnimation(){
    //     this.animatedValue.setValue(1);
    //     Animated.timing(
    //         this.animatedValue,{
    //             toValue: 0,
    //             duration: 3000,
    //         }
    //     ).start();
    // }

    // layout(e){
    //     //onLayout方法，这里面携带的就有宽高信息
    //     //判断文本宽度是否长于屏幕
    //     console.log(this);
    //     if (e.layout.width > Common.window.width - 50 && this.state.startAnimated === false){
    //         this.state.setState = {
    //             textWidth: e.layout.width,
    //             startAnimated: true
    //         }
    //     }
    //
    // }

    componentDidMount(){
       // this._startAnimation();
    }

    render(){
        const text = this.props.cellData.text;
        const {textWidth} = this.state;
        // const moving = this.animatedValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: [-Common.window.width, Common.window.width]
        // })

        return(
            text.length > 0 ?
                <View style={[this.props.style, styles.wrapper]}>
                    <Image source={images.scan} style={styles.image}/>

                    <Animated.View style={{flex:1}}>
                        <Text style={styles.text}  adjustsFontSizeToFit numberOfLines={0}>
                            {text}
                        </Text>
                    </Animated.View>
                </View>
                :
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

        paddingLeft: 10,
    }
});