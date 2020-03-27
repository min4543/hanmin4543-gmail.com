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
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

var deviceWidth = Dimensions.get('window').width;

const messageInformation = [
  {
    key: 'message-0',
    channelId: 'Christina',
    channelLevel: '8',
    channelTitle: 'Boa madrugada familia',
    messageText:
      'BulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBula',
    messageTime: '25 OCT 2020',
    hasMessageMore: true,
    hasImage: false,
  },
  {
    key: 'message-1',
    channelId: 'Angella',
    channelLevel: '4',
    channelTitle: 'Budafest alibaba',
    messageText:
      'hasImage do you have any image for this message? yes I have it can i see the imageyes I have it can i see the imageyes I have it can i see the image?',
    messageTime: '30 Apr 2020',
    hasMessageMore: true,
    hasImage: true,
  },
  {
    key: 'message-2',
    channelId: 'Jeorge',
    channelLevel: '10',
    channelTitle: 'Boa madrugada familia',
    messageText: 'hahhahahahhahaahahahhahahahahh',
    messageTime: '01 DEC 2020',
    hasMessageMore: false,
    hasImage: false,
  },
  {
    key: 'message-3',
    channelId: 'Jeorge',
    channelLevel: '10',
    channelTitle: 'Boa madrugada familia',
    messageText: 'hahhahahahhahaahahahhahahahahh',
    messageTime: '01 DEC 2020',
    hasMessageMore: false,
    hasImage: false,
  },
  {
    key: 'message-4',
    channelId: 'Angella',
    channelLevel: '4',
    channelTitle: 'Budafest alibaba',
    messageText:
      'hasImage do you have any image for this message? yes I have it can i see the imageyes I have it can i see the imageyes I have it can i see the image?',
    messageTime: '30 Apr 2020',
    hasMessageMore: true,
    hasImage: true,
  },
  {
    key: 'message-5',
    channelId: 'Christina',
    channelLevel: '8',
    channelTitle: 'Boa madrugada familia',
    messageText:
      'BulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBulaBulaBualBualBualBulaBula',
    messageTime: '25 OCT 2020',
    hasMessageMore: true,
    hasImage: false,
  },
];

export default class MentionMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massageListData: messageInformation,
    };
  }

  renderItem = ({item}) => {
    const {massageListData} = this.state;
    return (
      <View style={styles.massageNoImage}>
        <Image
          style={styles.messageProfile}
          source={require('../../../images/message_profile1.png')}
        />
        <View style={styles.messageFlatListView}>
          <View style={styles.messageHeaderView}>
            <View style={styles.messageHeaderContent}>
              <View style={styles.messageChannelIdView}>
                <Text style={styles.messageChannelId}>{item.channelId}</Text>
                <View style={styles.messageChannelLevelView}>
                  <Text style={styles.messageChannelLevel}>
                    Lv.{item.channelLevel}
                  </Text>
                </View>
              </View>
              <Text style={styles.messageChannelTitle}>
                {item.channelTitle}
              </Text>
            </View>
            <View style={styles.messageReplyView}>
              <TouchableOpacity style={styles.messageReplyButton}>
                <Text style={styles.messageReplyText}>Reply</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../../../images/messageDel.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.messageTextView}>
            {item.hasImage ? (
              <Image
                style={styles.messageHasImage}
                source={require('../../../images/examplePicture.jpg')}
              />
            ) : null}
            <Text style={styles.messageText}>{item.messageText}</Text>
          </View>

          <View style={styles.messageTimeView}>
            <Text style={styles.messageTimeText}>{item.messageTime}</Text>
            {item.hasMessageMore ? (
              <TouchableOpacity style={styles.hasMessageMoreView}>
                <Text style={styles.hasMessageMoreText}>View all message</Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity style={styles.messageTranslationView}>
              <Text style={styles.messageTranslationText}>Translation</Text>
            </TouchableOpacity>
          </View>
          {/* <Image
            style={styles.messageFlatListLine}
            source={require('../../../images/layer567.png')}
          /> */}
        </View>
      </View>
    );
  };
  render() {
    const {} = this.props;
    const {massageListData} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.messageInfoView}>
            {/* <Image
              style={styles.messageProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.messageInfoContent}>
              <Text></Text>
            </View> */}

            <FlatList
              data={massageListData}
              renderItem={this.renderItem}
              contentContainerStyle={styles.draggableList}
              extraData={this.state}></FlatList>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  messageFlatListView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  messageInfoView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 16,
    marginRight: 12,
  },
  massageNoImage: {
    flexDirection: 'row',
  },
  massageHasImage: {
    flexDirection: 'row',
  },
  messageHeaderView: {
    marginTop: 12,
    flexDirection: 'row',
    flex: 1,
    marginLeft:13
  },
  messageChannelIdView: {
    flexDirection: 'row',
  },
  messageChannelId: {
    fontSize: 15,
    fontWeight: '600',
  },
  messageChannelLevelView: {
    alignSelf: 'flex-end',
    marginBottom: 3,
    marginLeft: 2,
    borderRadius: 2,
    borderColor: 'rgb(160,160,160)',
    width: 25,
    height: 11,
    backgroundColor: 'rgb(160,160,160)',
  },
  messageChannelLevel: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
  },
  messageChannelTitle: {
    fontSize: 12.7,
    color: 'black',
    opacity: 0.7,
  },
  messageReplyView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
  },
  messageReplyButton: {
    borderColor: 'rgb(235,235,235)',
    backgroundColor: 'rgb(235,235,235)',
    borderRadius: 33.3,
    height: 26,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  messageReplyText: {
    fontSize: 11,
    textAlign: 'center',
    color: 'rgb(66,66,66)',
  },
  messageText: {
    flex: 1,
    color: 'black',
    opacity: 0.7,
    fontSize: 11.3,
    lineHeight: 14,
    textAlign: 'left',
  },
  messageTextView: {
    flexDirection: 'row',
    marginTop: 3,
    marginLeft:13

  },
  messageHasImage: {
    width: 66,
    height: 66,
    marginRight: 18,
    borderRadius: 6,
  },
  messageTimeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 4,
    marginBottom: 4,
    marginLeft:13,
    borderBottomWidth:0.3,
    borderBottomColor:'rgb(153,153,153)',
    marginBottom:5,

  },
  messageTimeText: {
    fontSize: 8,
    color: 'rgb(153,153,153)',
    opacity: 0.7,
    marginLeft: 5,
    marginRight: 5,
    marginBottom:4,
  },
  hasMessageMoreView: {
    marginLeft: 5,
    marginRight: 5,
  },
  hasMessageMoreText: {
    fontSize: 8,
    color: 'rgb(153,153,153)',
    opacity: 0.7,
  },
  messageTranslationView: {
    marginLeft: 5,
    marginRight: 5,
  },
  messageTranslationText: {
    fontSize: 8,
    color: 'rgb(153,153,153)',
    opacity: 0.7,
  },
  messageProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  messageFlatListLine:{
    width:313,
    height:0.6,
    opacity:0.3
  }
});
