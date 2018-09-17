import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
var Dimensions = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
export default class ShopCar extends Component {
    static defaultProps = {
        url: 'https://raw.githubusercontent.com/huangjianguohjg/json/master/ewew.json'
    };

    constructor(props) {
        super(props);
        this.state = {
            data: [],//存储列表使用的数据
            refreshing: false,//当前的刷新状态
        };
    }

//{item.name}

    getView({item}) {
        //这里返回的就是每个Item
        return (
                <View style={styles.item}>
                    {/*左边的图片*/}
                    <Text style={{fontSize:30}}>{item.name}</Text>
                    <Image source={{uri: item.icon}} style={styles.image}/>
                    <Text style={{fontSize:17,marginTop:15,marginLeft:15,marginRight:15}}>{item.content}</Text>
                </View>
        )
    };

    /**
     * 给列表设置id
     * @param item
     * @param index
     */
    keyExtractor = (item, index) => item.toString();

    /**
     * 尾布局
     */
    footer = () => {
        return (
            <Text style={{
                marginTop: 10,
                backgroundColor: '#EB3695',
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 150,
            }}>我是尾布局</Text>
        )
    };

    count = 0;//下拉刷新的次数

    /**
     * 下拉属性
     */
    onRefresh = () => {
        //设置刷新状态为正在刷新
        this.setState({
            refreshing: true,
        });
        //延时加载
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({
                refreshing: false,
            });
        }, 1500);
    };

    /**
     * 上拉加载
     * 2017.10.23 11:03 还有一些问题
     */
    onEndReached = (info: { distanceFromEnd: number }) => {
        ToastAndroid.show('正在加载中...', ToastAndroid.SHORT);

    };

    /**
     * json 数据实体类
     */
    ItemData(images, title, id) {
        this.images = new Array(images);
        this.title = title;
        this.id = id;
    }

    //渲染完成，请求网络数据
    componentDidMount() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((response) => {
                //解析json数据
                var json = response['d'];
                //更新状态机
                this.setState({
                    data: json,
                });
            })
            .catch((error) => {
                if (error) {
                    //网络错误处理
                    console.log('error', error);
                }
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.getView}
                    //指定为GridView效果，需要下面两个属性同时设置，且numColumns必须大于1
                    // numColumns={2}
                    // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}

                    //下拉刷新，必须设置refreshing状态
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}

                    //上拉加载
                    // onEndReachedThreshold={0}
                    // onEndReached={this.onEndReached}
                />
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
    },
    button: {
        width: 120,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4398ff',
    },

    swiper: {
    },
    img: {
        width: ScreenWidth,
        height: 200,
    },
    item: {
        borderRadius: 5,
        backgroundColor: 'white',
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: ScreenWidth - 40,
        height: 200,
        marginTop:20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginLeft:10

    },
    left: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    //让 Text 水平方向充满容器
    content: {
        bottom: 10,
        marginRight: 16,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }

});