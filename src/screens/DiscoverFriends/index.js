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
  FlatList,
  TextInput,
} from 'react-native';

const discoverFriendsInformation = [
  {
    key: 'discoverFriends-0',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-1',
    channelID: 'Mick',
    channelLevel: '8',
    channelGender: 'm',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-2',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-0',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-1',
    channelID: 'Mick',
    channelLevel: '8',
    channelGender: 'm',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-2',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-0',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-1',
    channelID: 'Mick',
    channelLevel: '8',
    channelGender: 'm',
    channelTitle: 'Boa madrugada',
  },
  {
    key: 'discoverFriends-2',
    channelID: 'Christina',
    channelLevel: '8',
    channelGender: 'f',
    channelTitle: 'Boa madrugada',
  },
];

export default class DiscoverFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discoverFriendsListData: discoverFriendsInformation,
    };
  }

  renderItem = ({item}) => {
    const {discoverFriendsListData} = this.state;
    return (
      <View style={styles.discoverFriendsListView}>
        <Image
          style={styles.profileImage}
          source={require('../../../images/profile_man.png')}
        />
        <View style={styles.discoverFriendsList}>
          <View style={styles.channelFirstInformation}>
            <Text style={styles.channelIDText}>{item.channelID}</Text>
            <View style={styles.channelLevelView}>
              <Text style={styles.channelLevelText}>
                Lv.{item.channelLevel}
              </Text>
            </View>
            {item.channelGender === 'f' ? (
              <View style={styles.genderFemale}>
                <Image
                  style={styles.genderImage}
                  source={require('../../../images/path7.png')}
                />
              </View>
            ) : (
              <View style={styles.genderMale}>
                <Image
                  style={styles.genderImage}
                  source={require('../../../images/path7.png')}
                />
              </View>
            )}
          </View>
          <Text>{item.channelTitle}</Text>
        </View>
        <View style={styles.followButton}>
          <Text>Follow</Text>
        </View>
        <View style={styles.followButton}>
          <Text>Invite</Text>
        </View>
      </View>
    );
  };
  render() {
    const {} = this.props;
    const {discoverFriendsListData} = this.state;

    return (
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.linkableView}>
            <Image source={require('../../../images/4.png')} />
            <Image source={require('../../../images/4.png')} />
            <Image source={require('../../../images/4.png')} />
            <Image source={require('../../../images/4.png')} />
            <Image source={require('../../../images/4.png')} />
            <Image source={require('../../../images/next.png')} />
          </View>
          <Text style={styles.linkableText}>Linkable your Account</Text>
        </View>

        <View style={styles.suggesetListView}>
          <Text style={styles.suggestTitle}>Suggestd for you</Text>

          <FlatList
            data={discoverFriendsListData}
            renderItem={this.renderItem}
            contentContainerStyle={styles.draggableList}
            extraData={this.state}></FlatList>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  linkableView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 34,
    marginLeft: 16,
  },
  linkableText: {
    fontSize: 13.3,
    color: 'rgb(168,168,168)',
    textAlign: 'center',
    marginTop: 23,
  },
  suggesetListView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 38,
  },
  suggestTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 14,
  },
  discoverFriendsListView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'red',
    marginRight: 14,
  },
  discoverFriendsList: {
  flex:1
  },
  channelFirstInformation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelIDText: {
    fontSize: 15.3,
    lineHeight: 15.3,
    fontWeight: '500',
  },
  channelLevelView: {
    width: 24.7,
    height: 11.3,
    borderRadius: 2,
    backgroundColor: 'rgb(235,235,235)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3.7,
    marginRight: 4.7,
  },
  channelLevelText: {
    fontSize: 8.7,
    lineHeight: 8.7,
  },
  genderFemale: {
    width: 9.3,
    height: 9.3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(215,52,98)',
  },
  genderMale: {
    width: 9.3,
    height: 9.3,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(52,110,215)',
  },
  genderImage: {
    width: 3.8,
    height: 6,
  },
  followButton:{
      width:74.7,
      height:28.7,
      borderRadius:33.3,
      backgroundColor:'rgb(235,235,235)',
      alignItems: 'center',
    justifyContent: 'center',
    marginLeft:3

  }
});
