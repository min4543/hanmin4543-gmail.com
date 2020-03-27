import React, {Component} from 'react';
import {
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

const Tab = createMaterialTopTabNavigator();
var deviceWidth = Dimensions.get('window').width;
const actions = [
  {
    text: 'Accessibility',
    icon: require('../../../images/homeFilter.png'),
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'Language',
    icon: require('../../../images/homeFilter.png'),
    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Location',
    icon: require('../../../images/homeFilter.png'),
    name: 'bt_room',
    position: 3,
  },
  {
    text: 'Video',
    icon: require('../../../images/homeFilter.png'),
    name: 'bt_videocam',
    position: 4,
  },
];

export default class MyLive extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.myLiveListView}>
          <View style={styles.myLiveFirstContentsView}>
            <View style={styles.myLiveContentsListView}>
              <View style={styles.myLiveScreenView}>
                <Image
                  style={styles.myLiveScreen}
                  source={require('../../../images/myLiveImage1.png')}
                />
                <Image
                  style={styles.myLivePrize}
                  source={require('../../../images/pr1.png')}
                />
                <Text style={styles.myLivePrizeText}>1</Text>
                <View style={styles.myLiveContentTime}>
                  <Text style={styles.myLiveContentTimeText}>12:45</Text>
                </View>
              </View>
              <View style={styles.myLiveInformationView}>
                <Text style={styles.myLiveTitle}>William Shakespeare</Text>
                <View style={styles.myLiveContents}>
                  <Text style={styles.myLiveContentsText}>
                    love is the triumph of imagination over intelligence.
                  </Text>
                  <TouchableOpacity style={styles.myLiveContentsMoreButton}>
                    <Text style={styles.myLiveContentsMoreButtonText}>
                      more
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.myLiveContentsHashTag}>
                  #happy #mygirl #atschool #smile #happy #mygirl #atschool
                  #smile
                </Text>
                <View style={styles.myLiveCountView}>
                  <View style={styles.myLiveCountListView}>
                    <View style={styles.countView}>
                      <Text style={styles.countBoldText}>240</Text>
                      <Text style={styles.countCategory}>Heart</Text>
                    </View>
                    <View style={styles.countView}>
                      <Text style={styles.countBoldText}>450</Text>
                      <Text style={styles.countCategory}>Audience</Text>
                    </View>
                    <View style={styles.countView}>
                      <Text style={styles.countBoldText}>320 P</Text>
                      <Text style={styles.countCategory}>Supports</Text>
                    </View>
                    <View style={styles.countView}>
                      <Text style={styles.countBoldText}>3,409</Text>
                      <Text style={styles.countCategory}>Comments</Text>
                    </View>
                    <TouchableOpacity>
                      <Image
                        source={require('../../../images/component971.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.myLiveContentsListView}>
            <View style={styles.myLiveScreenView}>
              <Image
                style={styles.myLiveScreen}
                source={require('../../../images/myLiveImage2.png')}
              />
              <Image
                style={styles.myLivePrize}
                source={require('../../../images/pr2.png')}
              />
              <Text style={styles.myLivePrizeText}>2</Text>
              <View style={styles.myLiveContentTime}>
                <Text style={styles.myLiveContentTimeText}>12:45</Text>
              </View>
            </View>
            <View style={styles.myLiveInformationView}>
              <Text style={styles.myLiveTitle}>William Shakespeare</Text>
              <View style={styles.myLiveContents}>
                <Text style={styles.myLiveContentsText}>
                  love is the triumph of imagination over intelligence.
                </Text>
                <TouchableOpacity style={styles.myLiveContentsMoreButton}>
                  <Text style={styles.myLiveContentsMoreButtonText}>more</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.myLiveContentsHashTag}>
                #happy #mygirl #atschool #smile #happy #mygirl #atschool #smile
              </Text>
              <View style={styles.myLiveCountView}>
                <View style={styles.myLiveCountListView}>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>240</Text>
                    <Text style={styles.countCategory}>Heart</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>450</Text>
                    <Text style={styles.countCategory}>Audience</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>320 P</Text>
                    <Text style={styles.countCategory}>Supports</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>3,409</Text>
                    <Text style={styles.countCategory}>Comments</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../images/component971.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.myLiveContentsListView}>
            <View style={styles.myLiveScreenView}>
              <Image
                style={styles.myLiveScreen}
                source={require('../../../images/myLiveImage3.png')}
              />
              <Image
                style={styles.myLivePrize}
                source={require('../../../images/pr3.png')}
              />
              <Text style={styles.myLivePrizeText}>3</Text>
              <View style={styles.myLiveContentTime}>
                <Text style={styles.myLiveContentTimeText}>12:45</Text>
              </View>
            </View>
            <View style={styles.myLiveInformationView}>
              <Text style={styles.myLiveTitle}>William Shakespeare</Text>
              <View style={styles.myLiveContents}>
                <Text style={styles.myLiveContentsText}>
                  love is the triumph of imagination over intelligence.
                </Text>
                <TouchableOpacity style={styles.myLiveContentsMoreButton}>
                  <Text style={styles.myLiveContentsMoreButtonText}>more</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.myLiveContentsHashTag}>
                #happy #mygirl #atschool #smile #happy #mygirl #atschool #smile
              </Text>
              <View style={styles.myLiveCountView}>
                <View style={styles.myLiveCountListView}>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>240</Text>
                    <Text style={styles.countCategory}>Heart</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>450</Text>
                    <Text style={styles.countCategory}>Audience</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>320 P</Text>
                    <Text style={styles.countCategory}>Supports</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>3,409</Text>
                    <Text style={styles.countCategory}>Comments</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../images/component971.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.myLiveContentsListView}>
            <View style={styles.myLiveScreenView}>
              <Image
                style={styles.myLiveScreen}
                source={require('../../../images/myLiveImage4.png')}
              />
              {/* <Image
                style={styles.myLivePrize}
                source={require('../../../images/pr3.png')}
              />
              <Text style={styles.myLivePrizeText}>3</Text> */}
              <View style={styles.myLiveContentTime}>
                <Text style={styles.myLiveContentTimeText}>12:45</Text>
              </View>
            </View>
            <View style={styles.myLiveInformationView}>
              <Text style={styles.myLiveTitle}>William Shakespeare</Text>
              <View style={styles.myLiveContents}>
                <Text style={styles.myLiveContentsText}>
                  love is the triumph of imagination over intelligence.
                </Text>
                <TouchableOpacity style={styles.myLiveContentsMoreButton}>
                  <Text style={styles.myLiveContentsMoreButtonText}>more</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.myLiveContentsHashTag}>
                #happy #mygirl #atschool #smile #happy #mygirl #atschool #smile
              </Text>
              <View style={styles.myLiveCountView}>
                <View style={styles.myLiveCountListView}>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>240</Text>
                    <Text style={styles.countCategory}>Heart</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>450</Text>
                    <Text style={styles.countCategory}>Audience</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>320 P</Text>
                    <Text style={styles.countCategory}>Supports</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>3,409</Text>
                    <Text style={styles.countCategory}>Comments</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../images/component971.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.myLiveContentsListView}>
            <View style={styles.myLiveScreenView}>
              <Image
                style={styles.myLiveScreen}
                source={require('../../../images/groupChatSendImage.png')}
              />
              {/* <Image
                style={styles.myLivePrize}
                source={require('../../../images/pr3.png')}
              />
              <Text style={styles.myLivePrizeText}>3</Text> */}
              <View style={styles.myLiveContentTime}>
                <Text style={styles.myLiveContentTimeText}>12:45</Text>
              </View>
            </View>
            <View style={styles.myLiveInformationView}>
              <Text style={styles.myLiveTitle}>William Shakespeare</Text>
              <View style={styles.myLiveContents}>
                <Text style={styles.myLiveContentsText}>
                  love is the triumph of imagination over intelligence.
                </Text>
                <TouchableOpacity style={styles.myLiveContentsMoreButton}>
                  <Text style={styles.myLiveContentsMoreButtonText}>more</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.myLiveContentsHashTag}>
                #happy #mygirl #atschool #smile #happy #mygirl #atschool #smile
              </Text>
              <View style={styles.myLiveCountView}>
                <View style={styles.myLiveCountListView}>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>240</Text>
                    <Text style={styles.countCategory}>Heart</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>450</Text>
                    <Text style={styles.countCategory}>Audience</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>320 P</Text>
                    <Text style={styles.countCategory}>Supports</Text>
                  </View>
                  <View style={styles.countView}>
                    <Text style={styles.countBoldText}>3,409</Text>
                    <Text style={styles.countCategory}>Comments</Text>
                  </View>
                  <TouchableOpacity>
                    <Image
                      source={require('../../../images/component971.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* <FloatingAction
          style={styles.floatingButton}

            actions={actions}
            onPressItem={name => {
              console.log(`selected button: ${name}`);
            }}
          ><Image source={require('../../../images/component971.png')}/></FloatingAction> */}
        </ScrollView>
        <View style={styles.myLiveFilterView}>
          <TouchableOpacity style={styles.myLiveFilter}>
            <Image
              style={styles.myLiveFilterButton}
              source={require('../../../images/homeFilter.png')}
            />
            <Text style={styles.myLiveFilterText}>Audience</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.floatingTabMenu}>
          <TouchableOpacity>
            <Image
              style={styles.floatingTabLiveStart}
              source={require('../../../images/component1451.png')}
            />
          </TouchableOpacity>
          <View style={styles.floatingTabDevidedLine} />
          <TouchableOpacity>
            <Image
              style={styles.floatingTabInsertVOD}
              source={require('../../../images/component1461.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  myLiveFilterView: {
    marginRight: 17,
    marginLeft: 20,
    position: 'absolute',
  },
  myLiveFilter: {
    flexDirection: 'row',
    backgroundColor: 'rgb(178,178,178)',
    width: 100,
    height: 27,
    borderRadius: 13.7,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  myLiveFilterButton: {
    marginLeft: 2,
    marginRight: 10,
  },
  myLiveFilterText: {
    fontSize: 11,
    color: 'rgb(255,255,255)',
    fontWeight: '600',
  },
  myLiveListView: {
    marginRight: 14,
    marginLeft: 20,
    marginTop: 5,
  },
  myLiveFirstContentsView:{
    marginTop:32
  },
  myLiveContentsListView: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 3,
    height: 166,
  },
  myLiveScreenView: {
    marginTop: 5,
    width: 97,
    marginLeft: 3,
  },
  myLivePrizeView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  myLivePrize: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: -4,
    left: -4,
  },
  myLivePrizeText: {
    fontSize: 20,
    color: 'rgb(254,254,254)',
    fontStyle: 'italic',
    position: 'absolute',
    left:6,
    top:-3
  },
  myLiveScreen: {
    width: 94,
    height: 161,
    borderRadius: 5,
    position: 'absolute',
  },
  myLiveContentTime: {
    width: 33,
    height: 16,
    borderRadius: 4,
    opacity: 0.4,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 57,
    top: 4,
  },
  myLiveContentTimeText: {
    fontSize: 9,
    color: 'rgb(255,255,255)',
    opacity: 0.8,
  },
  myLiveInformationView: {
    marginLeft: 14,
    marginTop: 10,
  },
  myLiveTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  myLiveContents: {
    marginBottom: 10,
  },
  myLiveContentsText: {
    width: 225,
    fontSize: 12,
    lineHeight: 14,
  },
  myLiveContentsMoreButton: {
    backgroundColor: 'rgb(255,255,255)',
    width: 33,
    height: 11,
    borderRadius: 33,
    opacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: 'rgb(82,82,82)',
    position: 'absolute',
    top: 16,
    left: 74,
  },
  myLiveContentsMoreButtonText: {
    fontSize: 8,
    color: 'rgb(118,118,118)',
  },
  myLiveContentsHashTag: {
    fontSize: 12,
    width: 200,
    lineHeight: 14,
    color: 'rgb(0,132,224)',
    marginBottom: 16,
    
  },
  myLiveCountListView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: deviceWidth - 155,
  },
  countView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  countBoldText: {
    fontSize: 14,
    fontWeight: '600',
  },
  countCategory: {
    fontSize: 10,
    opacity: 0.8,
  },

  floatingTabMenu: {
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation:3,
    width: 208,
    height: 54,
    borderRadius: 27,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    left: deviceWidth / 2 - 104,
  },
  floatingTabLiveStart: {
    width: 33,
    height: 33,
  },
  floatingTabDevidedLine: {
    borderWidth: 0.7,
    borderColor: 'black',
    height: 25,
    opacity: 0.6,
  },
  floatingTabInsertVOD: {
    width: 33,
    height: 33,
  },
});
