
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import Common from '../common/constants';
import Images from '../images/images';

export default class SearchBar extends React.Component {
    render(){
        return(
            <View style={styles.headerWrap}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this.props.scanAction}
                >
                    <Image
                        style={styles.scanIcon}
                        source={Images.scan}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.searchInput}
                    onPress={this.props.searchAction}
                >
                    <Image
                        style={styles.searchIcon}
                        source={Images.search}
                    />
                    <Text style={styles.searchPlaceholder}>XXXX</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={this.props.mesageAction}
                >
                    <Image
                        style={styles.messageIcon}
                        source={Images.message}
                    />
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Common.colors.blue,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        height: 64,
    },

    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 24,
        width: Common.window.width - 100,
        marginTop: 16,
        backgroundColor: "#ffffff",
        borderRadius: 2,
    },

    searchIcon: {
        width: 20,
        height: 20,
    },

    scanIcon: {
        marginTop: 16,
        width: 20,
        height: 20,
    },

    messageIcon: {
        marginTop:16,
    },

    searchPlaceholder: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'gray'
    }
})