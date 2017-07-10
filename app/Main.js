
import  React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export  default  class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.viewA}></View>
                <View style={styles.viewB}></View>
                <View style={styles.viewC}></View>
                <View>
                    <TextInput
                        style={styles.textFiled}
                        placeholder='占位文字'
                        onChangeText={(text) => this.setState({text: text})}
                    />
                </View>
                <Text>
                    {this.state.text}
                </Text>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', //决定主轴排序
        alignItems: 'center', //觉得次轴排序
        backgroundColor: '#F5FCFF',
        flexDirection: 'column'
    },
    viewA: {
        // flex: 1,
        width: 60,
        height: 100,
        backgroundColor: 'powderblue'
    },
    viewB: {
        // flex: 1,
        width :30,
        height: 100,
        backgroundColor: "skyblue"
    },
    viewC: {
        // flex: 1,
        height: 100,
        width: 30,
        backgroundColor: "steelblue"
    },
    textFiled:{
        width: 300,
        height:30,
        backgroundColor: "green"
    }
});