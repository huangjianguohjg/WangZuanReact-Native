/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator,
} from 'react-navigation';

//首页的页面
import Home from './src/Home';
import ShopCar from './src/ShopCar';
import Mine from './src/Mine';

import Details from './src/Details';
//侧滑菜单的页面
import Wallet from "./src/drawer/Wallet";
import CardCoupons from "./src/drawer/CardCoupons";
import Invite from "./src/drawer/Invite";

/**
 * 配置底部标签
 */
const Tab = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '首页',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'blue'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),

        },
    },

    ShopCar: {
        screen: ShopCar,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '学校',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'blue'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '学校',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_shop_car.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions: {
            //stackNavigator的属性
            headerTitle: '我的',
            gestureResponseDistance: {horizontal: 300},
            headerBackTitle: null,
            headerStyle: {backgroundColor: 'blue'},//导航栏的样式
            headerTitleStyle: {//导航栏文字的样式
                color: 'white',
                //设置标题的大小
                fontSize: 16,
                //居中显示
                alignSelf: 'center',
            },
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: true,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: 'blue',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

/*
 * 配置堆栈导航
 */
const Stack = StackNavigator({
    Tab: {
        screen: Tab,
    },
    Details: {
        screen: Details,
    },

    //DrawerNavigator跳转的页面也必须在这里注册
    Wallet: {
        screen: Wallet,
    },
    CardCoupons: {
        screen: CardCoupons,
    },
    Invite: {
        screen: Invite,
    },
});


/**
 * 配置侧滑菜单
 */
export default Drawer = DrawerNavigator({
    Home: {
        screen: Stack,
        navigationOptions: {
            drawerLabel: '首页',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Wallet: {
        screen: Wallet,
        navigationOptions: {
            drawerLabel: '我的钱包',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/wallet.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    CardCoupons: {
        screen: CardCoupons,
        navigationOptions: {
            drawerLabel: '我的卡券',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/cardcoupons.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Invite: {
        screen: Invite,
        navigationOptions: {
            drawerLabel: '邀请好友',
            drawerIcon: ({tintColor}) => (
                <Image
                    source={require('./images/invite.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },

}, {
    drawerWidth: 250, // 展示的宽度
    drawerPosition: 'left', // 抽屉在左边还是右边
    // contentOptions: {
    //     // activeTintColor: 'black',  // 选中文字颜色
    //     activeBackgroundColor: '#fff', // 选中背景颜色
    //     inactiveTintColor: '#EB3695',  // 未选中文字颜色
    //     inactiveBackgroundColor: '#fff', // 未选中背景颜色
    //     style: {  // 样式
    //
    //     }
    // },
});
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
});







//
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
//
//
// import React, {Component} from 'react';
// import {
//     StyleSheet,
//     FlatList,
//     ToastAndroid,
//     Image,
//     TouchableOpacity,
//     Text,
//     View
// } from 'react-native';
//
//
// export default class App extends Component<{}> {
//
//     static defaultProps = {
//         url: 'https://news-at.zhihu.com/api/4/news/latest'
//     };
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],//存储列表使用的数据
//             refreshing: false,//当前的刷新状态
//         };
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={this.state.data}
//                     keyExtractor={this.keyExtractor}
//                     renderItem={this.getView}
//                     ListHeaderComponent={this.header}
//                     ListFooterComponent={this.footer}
//
//                     //指定为GridView效果，需要下面两个属性同时设置，且numColumns必须大于1
//                     // numColumns={2}
//                     // columnWrapperStyle={{borderWidth: 2, borderColor: 'black'}}
//
//                     //下拉刷新，必须设置refreshing状态
//                     onRefresh={this.onRefresh}
//                     refreshing={this.state.refreshing}
//
//                     //上拉加载
//                     // onEndReachedThreshold={0}
//                     // onEndReached={this.onEndReached}
//                 />
//             </View>
//         );
//     }
//
//     /**
//      * item
//      * @returns {XML}
//      */
//     getView({item}) {
//         //这里返回的就是每个Item
//         return (
//             <TouchableOpacity activeOpacity={0.5}
//                               onPress={() => ToastAndroid.show(item.title, ToastAndroid.SHORT)}>
//                 <View style={styles.item}>
//                     {/*左边的图片*/}
//                     <Image source={{uri: item.images[0]}} style={styles.image}/>
//                     <View style={styles.left}>
//                         {/*右边的View*/}
//                         <Text style={{marginTop: 15, color: '#333333'}}>{item.title}</Text>
//                         <View style={styles.content}>
//                             <Text style={{flex: 1, textAlign: 'right'}}>{item.id + ''}</Text>
//                         </View>
//                     </View>
//                 </View>
//             </TouchableOpacity>
//         )
//     };
//
//     /**
//      * 给列表设置id
//      * @param item
//      * @param index
//      */
//     keyExtractor = (item, index) => item.id;
//
//     /**
//      * 头布局
//      */
//     header = () => {
//         return (
//             <Text style={{
//                 backgroundColor: '#4398ff',
//                 color: 'white',
//                 fontSize: 18,
//                 textAlign: 'center',
//                 textAlignVertical: 'center',
//                 height: 150,
//             }}>我是头布局</Text>
//         )
//     };
//     /**
//      * 尾布局
//      */
//     footer = () => {
//         return (
//             <Text style={{
//                 marginTop: 10,
//                 backgroundColor: '#EB3695',
//                 color: 'white',
//                 fontSize: 18,
//                 textAlign: 'center',
//                 textAlignVertical: 'center',
//                 height: 150,
//             }}>我是尾布局</Text>
//         )
//     };
//
//     count = 0;//下拉刷新的次数
//
//     /**
//      * 下拉属性
//      */
//     onRefresh = () => {
//         //设置刷新状态为正在刷新
//         this.setState({
//             refreshing: true,
//         });
//         //延时加载
//         const timer = setTimeout(() => {
//             clearTimeout(timer);
//             //往数组的第一位插入数据，模拟数据新增 , unshift()会返回数组的长度
//             this.state.data.unshift(new this.ItemData('https://pic2.zhimg.com/v2-8f11b41f995ca5340510c1def1c003d1.jpg',
//                 '下拉刷新添加的数据——————' + this.count, 475843));
//             this.count++;
//             this.setState({
//                 refreshing: false,
//             });
//         }, 1500);
//     };
//
//     /**
//      * 上拉加载
//      * 2017.10.23 11:03 还有一些问题
//      */
//     onEndReached = (info: { distanceFromEnd: number }) => {
//         ToastAndroid.show('正在加载中...', ToastAndroid.SHORT);
//
//     };
//
//     /**
//      * json 数据实体类
//      */
//     ItemData(images, title, id) {
//         this.images = new Array(images);
//         this.title = title;
//         this.id = id;
//     }
//
//     //渲染完成，请求网络数据
//     componentDidMount() {
//         fetch(this.props.url)
//             .then((response) => response.json())
//             .then((response) => {
//                 //解析json数据
//                 var json = response['stories'];
//                 //更新状态机
//                 this.setState({
//                     data: json,
//                 });
//             })
//             .catch((error) => {
//                 if (error) {
//                     //网络错误处理
//                     console.log('error', error);
//                 }
//             });
//     }
//
// }
//
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#F5FCFF',
//     },
//     item: {
//         flexWrap: 'wrap',
//         flexDirection: 'row',
//         borderRadius: 5,
//         backgroundColor: 'white',
//         marginTop: 8,
//         marginLeft: 10,
//         marginRight: 10,
//     },
//     image: {
//         width: 90,
//         height: 90,
//         borderBottomLeftRadius: 5,
//         borderTopLeftRadius: 5,
//
//     },
//     left: {
//         flex: 1,
//         marginLeft: 8,
//         flexDirection: 'column',
//         alignItems: 'flex-start',
//     },
//     //让 Text 水平方向充满容器
//     content: {
//         bottom: 10,
//         marginRight: 16,
//         position: 'absolute',
//         flexDirection: 'row',
//         justifyContent: 'flex-end',
//     }
// });
