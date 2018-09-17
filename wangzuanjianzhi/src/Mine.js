import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
var Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
export default class Mine extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/dfgdfgfd.png')} style={{width:ScreenWidth,height:180}}/>
                <View style={{flexDirection:'row',height:60,marginTop:20,alignItems:'center'}}>
                    <Image source={require('../images/文章.png')} style={{width:27,height:27,marginLeft:15}}/>
                    <Text style={{marginLeft:10,fontSize:17,color:'brown',justifyContent:'center'}}>我的兼职</Text>
                </View>
                <View style={{flexDirection:'row',height:60,alignItems:'center'}}>
                    <Image source={require('../images/购物车.png')} style={{width:27,height:27,marginLeft:15}}/>
                    <Text style={{marginLeft:10,fontSize:17,color:'brown'}}>发布兼职</Text>
                </View>
                <View style={{flexDirection:'row',height:60,alignItems:'center'}}>
                    <Image source={require('../images/闪电.png')} style={{width:27,height:27,marginLeft:15}}/>
                    <Text style={{marginLeft:10,fontSize:17,color:'brown'}}>发布兼职状态</Text>
                </View>
                <View style={{flexDirection:'row',height:60,alignItems:'center'}}>
                    <Image source={require('../images/回形针.png')} style={{width:27,height:27,marginLeft:15}}/>
                    <Text style={{marginLeft:10,fontSize:17,color:'brown'}}>关于我们</Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:26,color:'white',padding:10,backgroundColor:'brown'}}>退出登录</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    }
});