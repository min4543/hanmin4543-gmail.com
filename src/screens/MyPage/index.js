/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MentionVideo from '../MentionVideo';
import SwipeUpDown from 'react-native-swipe-up-down';

const Tab = createMaterialTopTabNavigator();

var deviceWidth = Dimensions.get('window').width;

const exampleHashTag = [
  {
    key: 'hash-0',
    tagName: 'Mountain',
  },
  {
    key: 'hash-1',
    tagName: 'Nature',
  },
  {
    key: 'hash-2',
    tagName: 'Switzerland',
  },
  {
    key: 'hash-3',
    tagName: 'Everest',
  },
];

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hashTagListData: exampleHashTag,
      pressMentionStatus: false,
      pressGroupChatStatus: false,
      pressMyLiveStatus: false,
      folder: '',
    };
  }

  _onHideUnderlay = () => {
    this.setState({
      pressMentionStatus: false,
      pressGroupChatStatus: false,
      pressMyLiveStatus: false,
    });
  };
  _onShowUnderlay() {
    this.setState({
      pressMentionStatus: true,
      pressGroupChatStatus: true,
      pressMyLiveStatus: true,
    });
  }

  pressManagingFolder() {
    console.log('pressManagingFolder');
  }
  render() {
    const {} = this.props;
    const {hashTagListData} = this.state;

    var hashLoop = [];

    for (let i = 0; i < hashTagListData.length; i++) {
      hashLoop.push(
        <View key={hashTagListData[i].key} style={styles.channelHashTag}>
          <Text style={styles.hashTagText}># {hashTagListData[i].tagName}</Text>
        </View>,
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <View style={styles.header}>
            <View style={styles.headerLeftView}></View>
            <View style={styles.headerCenterView}>
              <Image
                style={styles.title}
                source={require('../../../images/logoGray.png')}
              />
            </View>
            <View style={styles.headerRightView}>
              <TouchableOpacity style={styles.navigationRight}>
                <Image source={require('../../../images/more.png')} />
              </TouchableOpacity>
            </View>
          </View> */}

          <View style={styles.profileView}>
            <TouchableOpacity>
              <Image
                style={styles.profile}
                source={require('../../../images/profile_man.png')}
              />
            </TouchableOpacity>
            <View style={styles.profileItem}>
              <View style={styles.profileContent}>
                <View style={styles.profileInfo}>
                  <Text style={styles.followInfo}>Lv.8</Text>
                  <Text style={styles.followInfoCategory}>Veteran</Text>
                </View>
                <View style={styles.profileDividerLine} />
                <View style={styles.profileInfo}>
                  <Text style={styles.followInfo}>238</Text>
                  <Text style={styles.followInfoCategory}>Follower</Text>
                </View>
                <View style={styles.profileDividerLine} />
                <View style={styles.profileInfo}>
                  <Text style={styles.followInfo}>123</Text>
                  <Text style={styles.followInfoCategory}>Following</Text>
                </View>
                <View style={styles.profileDividerLine} />
                <View style={styles.profileInfo}>
                  <Text style={styles.followInfo}>568 P</Text>
                  <Text style={styles.followInfoCategory}>Point</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.channelView}>
            <View style={styles.channelContent}>
              <Text style={styles.channelTitle}>Sophia's switzerland</Text>
              <View style={styles.channelInfo}>
                <View style={styles.channelDiamond}>
                  <Image
                    style={styles.diamondImage}
                    source={require('../../../images/support.png')}
                  />
                  <Text style={styles.diamondText}>10</Text>
                </View>
                <Text style={styles.channelID}>Sophia0512</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.channelEdit}
              onPress={() => this.swipeUpDownRef.showFull()}>
              {/* onPress={() => {
                this.props.navigation.navigate('MyPageEdit');
              }}> */}
              <Image source={require('../../../images/channelEdit.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.hashTagContent}>{hashLoop}</View>

          <View style={styles.communicationButtonView}>
            <View style={styles.mentionView}>
              <TouchableHighlight
                style={
                  this.state.pressMentionStatus
                    ? styles.communicationButtonPress
                    : styles.communicationButton
                }
                onPress={() => {
                  this.props.navigation.navigate('Mention');
                }}
                underlayColor={'transparent'}
                onHideUnderlay={() => {
                  this.setState({pressMentionStatus: false});
                }}
                onShowUnderlay={() => {
                  this.setState({pressMentionStatus: true});
                }}>
                <Text style={styles.communicationButtonText}>Mention</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.groupChatView}>
              <TouchableHighlight
                style={
                  this.state.pressGroupChatStatus
                    ? styles.communicationButtonPress
                    : styles.communicationButton
                }
                onPress={() => {
                  this.props.navigation.navigate('InviteFriends');
                }}
                underlayColor={'transparent'}
                onHideUnderlay={() => {
                  this.setState({pressGroupChatStatus: false});
                }}
                onShowUnderlay={() => {
                  this.setState({pressGroupChatStatus: true});
                }}>
                <Text style={styles.communicationButtonText}>Group Chat</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.myLiveView}>
              <TouchableHighlight
                style={
                  this.state.pressMyLiveStatus
                    ? styles.communicationButtonPress
                    : styles.communicationButton
                }
                onPress={() => {
                  this.props.navigation.navigate('MyLive');
                }}
                underlayColor={'transparent'}
                onHideUnderlay={() => {
                  this.setState({pressMyLiveStatus: false});
                }}
                onShowUnderlay={() => {
                  this.setState({pressMyLiveStatus: true});
                }}>
                <Text style={styles.communicationButtonText}>My Live</Text>
              </TouchableHighlight>
            </View>
          </View>

          {/* <View>
            <View style={styles.myTab}>
              <TouchableOpacity
                style={styles.videoTab}
                onPress={() => {
                  this.props.navigation.navigate('MentionVideo');
                }}>
                <Image source={require('../../../images/video.png')} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.peopleTab}
                onPress={() => {
                  this.props.navigation.navigate('Mention');
                }}>
                <Image source={require('../../../images/people.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.tabLine}>
              <Image
                style={styles.tabThickLine}
                source={require('../../../images/2.png')}
              />
              <View style={styles.tabThinLine} />
            </View>
          </View> */}

          <Tab.Navigator
            initialRouteName="Video"
            tabBarOptions={{
              labelStyle: styles.labelStyle,
              tabStyle: styles.tabStyle,
              style: styles.style,
              activeTintColor: '#000000',
              indicatorStyle: styles.indicatorStyle,
            }}>
            <Tab.Screen
              name="Video"
              component={MentionVideo}
              options={{
                tabBarLabel: 'Video',
              }}
              screenProps={{
                pressManagingFolder: this.pressManagingFolder.bind(this),
              }}
            />
            <Tab.Screen
              name="Person"
              component={MentionVideo}
              options={{tabBarLabel: 'Person'}}
            />
          </Tab.Navigator>

          {/* <View style={styles.myPostView}>
            <MasonryList
              listContainerStyle={styles.masonryListView}
              containerWidth={deviceWidth - 24}
              columns={3}
              images={[
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },
                {
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: deviceWidth / 3, height: 238},
                },{
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: (deviceWidth / 3), height: 238},
                },{
                  source: require('../../../images/image1.jpg'),
                  dimensions: {width: (deviceWidth / 3), height: 238},
                },
              ]}></MasonryList>
          </View> */}
        </ScrollView>

        <SwipeUpDown
          hasRef={ref => (this.swipeUpDownRef = ref)}
          itemMini={
            <Text
            // style={styles.welcome}
            >
              Welcome to React Native!
            </Text>
          }
          itemFull={
            <View>
              <Text
              // style={styles.instructions}
              >
                Welcome to component {'\n'} Swipe Up Down on React Native
              </Text>
            </View>
          }
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          onMoveDown={() => console.log('down')}
          onMoveUp={() => console.log('up')}
          disablePressToShow={false} // Press item mini to show full
          style={{backgroundColor: 'green'}} // style for swipe
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  // header: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-end',
  //   justifyContent: 'space-between',
  // },
  // headerLeftView: {
  //   flex: 1,
  // },
  // headerCenterView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // headerRightView: {
  //   flex: 1,
  //   alignItems: 'flex-end',
  // },
  // title: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   height: 43,
  //   marginTop: 40,
  // },
  // navigationRight: {
  //   height: 33,
  //   marginRight: 19,
  // },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  profile: {
    width: 65,
    height: 65,
    borderRadius: 33,
    marginRight: 8,
    marginLeft: 40,
  },
  profileItem: {
    flex: 1,
    marginRight: 30,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  profileInfo: {
    marginTop: 10,
    justifyContent: 'center',
  },
  followInfo: {
    fontWeight: '500',
    fontSize: 17,
    textAlign: 'center',
  },
  followInfoCategory: {
    fontSize: 11,
    fontWeight: '300',
    textAlign: 'center',
  },
  profileDividerLine: {
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    height: 25,
  },
  channelView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelContent: {
    flex: 1,
    marginLeft: 25,
  },
  channelTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 3,
  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelDiamond: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'gray',
    width: 25,
  },
  diamondImage: {
    height: 8,
    width: 8,
    marginLeft: 2,
  },
  diamondText: {
    fontSize: 8,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 2,
  },
  channelID: {
    fontSize: 12,
    marginLeft: 3,
    fontWeight: '400',
    alignItems: 'center',
  },
  channelEdit: {
    height: 33,
    marginRight: 19,
  },
  hashTagContent: {
    flexDirection: 'row',
    marginTop: 3,
    marginLeft: 25,
  },
  channelHashTag: {
    marginRight: 2,
  },
  hashTagText: {
    color: 'rgb(0,132,224)',
    fontSize: 13,
    lineHeight: 14,
  },
  communicationButtonView: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 9,
    marginRight: 9,
    marginBottom: 10,
  },
  mentionView: {
    flex: 1,
    marginLeft: 3,
    marginRight: 3,
  },
  groupChatView: {
    flex: 1,
    marginLeft: 6,
    marginRight: 6,
  },
  myLiveView: {
    flex: 1,
    marginLeft: 6,
    marginRight: 6,
  },
  communicationButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 33,
    borderWidth: 1.3,
    borderColor: 'gray',
  },
  communicationButtonPress: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 33,
    borderWidth: 1.3,
    borderColor: 'rgb( 255, 120, 0)',
  },
  communicationButtonText: {
    fontWeight: '500',
    fontSize: 13,
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 1,
    borderBottomWidth: 1,
  },
  style: {
    borderColor: 'black',
    marginLeft: 16,
    marginRight: 16,
    elevation: 0,
    shadowOpacity: 0,
  },
  indicatorStyle: {
    backgroundColor: 'black',
    height: 3,
  },
  myTab: {
    marginTop: 26,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
  },
  videoTab: {
    alignItems: 'center',
    flex: 1,
    height: 23,
    width: 23,
  },
  peopleTab: {
    alignItems: 'center',
    flex: 1,
    height: 23,
    width: 23,
  },
  tabLine: {
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
  },
  tabThickLine: {
    flex: 1,
    height: 3,
  },
  tabThinLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    width: deviceWidth - 32,
  },
  // folderGroupView: {
  //   marginTop: 15,
  //   marginLeft: 19,
  //   marginRight: 10,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // folderImage: {
  //   width: 20,
  //   height: 20,
  // },
  // folderFlex: {
  //   flex: 1,
  // },
  // folderNameText: {
  //   fontSize: 12,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },
  // folderMore: {
  //   width: 13,
  //   height: 13,
  // },
  // folderSelected: {
  //   fontWeight: 'bold',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlign: 'center',
  // },
  // filterView: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   marginTop: 22,
  //   marginBottom: 5,
  // },
  // filterTabView: {
  //   width: 180,
  //   height: 27,
  //   borderRadius: 13.5,
  //   backgroundColor: 'rgba(178, 178, 178, 1)',
  //   marginLeft: 19,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // filterHeaderView: {
  //   width: 24,
  //   height: 24,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginLeft: 2,
  // },
  // filterImage: {
  //   width: 24,
  //   height: 24,
  // },
  // filterItemView: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  //   paddingHorizontal: 5,
  // },
  // filterSeparateView: {
  //   width: 0.7,
  //   height: 11,
  //   backgroundColor: 'rgba(243, 243, 243, .2)',
  // },
  // filterText: {
  //   fontSize: 11,
  //   color: 'rgba(255, 255, 255, 1)',
  // },
  // sortView: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginRight: 26,
  //   width: 70,
  // },
  // sortImage: {
  //   width: 26,
  //   height: 26,
  // },
  // settingImage: {
  //   width: 26,
  //   height: 26,
  // },
  // myPostView: {
  //   flexDirection: 'row',
  //   marginLeft: 9,
  //   marginRight: 9,
  //   marginTop: 3,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // myPost: {
  //   backgroundColor: 'rgb(141,141,141)',
  //   borderRadius: 6,
  //   width: deviceWidth / 3,
  //   height: 238,
  //   flex: 1,
  //   marginLeft: 1.5,
  //   marginRight: 1.5,
  // },
  // myPostTimeView: {
  //   alignItems: 'flex-end',
  //   marginRight: 4,
  //   marginTop: 4,
  // },
  // myPostTimeContent: {
  //   width: 33,
  //   height: 16,
  //   backgroundColor: 'gray',
  //   borderRadius: 3,
  //   justifyContent: 'center',
  // },
  // myPostTime: {
  //   color: 'white',
  //   fontSize: 9,
  //   textAlign: 'center',
  // },
  // myPostInfoView: {
  //   justifyContent: 'flex-end',
  //   flex: 1,
  //   marginLeft: 7,
  //   marginBottom: 7,
  //   marginRight: 8,
  // },
  // myPostInfoContent: {
  //   flexDirection: 'row',
  // },
  // myPostProfile: {
  //   width: 30,
  //   height: 30,
  //   borderRadius: 15,
  // },
  // myPostLike: {
  //   flex: 1,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  // },
  // myPostLiveLike: {
  //   width: 18,
  //   height: 18,
  // },
  // myPostLiveLikeNumber: {
  //   fontSize: 8,
  //   color: 'white',
  //   textAlign: 'center',
  // },
});
