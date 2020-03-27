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
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ImagePicker from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Tab = createMaterialTopTabNavigator();
var deviceWidth = Dimensions.get('window').width;

export default class GroupChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      isKeyboardShow: false,
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({
      ...this.state,
      isKeyboardShow: true,
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      ...this.state,
      isKeyboardShow: false,
    });
  };

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({photo: response});
      }
    });
  };

  render() {
    const {} = this.props;
    const {photo, isKeyboardShow} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.groupChatView}>
          <View style={styles.greetingMessageView}>
            <View style={styles.greetingMessageContent}>
              <Text style={styles.greetingMessageText}>
                I'm going to lunch. Anybody want to join me? Let's talk over
                lunch!
              </Text>
            </View>
            <View>
              <View style={styles.lastMessageView}>
                <View style={styles.lastMessageContent}>
                  <Text style={styles.lastMessageText}>
                    Heyy all.. I've just posted another video~
                  </Text>
                </View>
                <TouchableOpacity>
                  <Image
                    style={styles.lastMessageProfile}
                    source={require('../../../images/channelImage1.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.lastMessageInformation}>
                <Text style={styles.lastMessageTime}>23:45 23 OCT.</Text>
                <Image
                  style={styles.lastMessageImage}
                  source={require('../../../images/message.png')}
                />
                <Text style={styles.lastMessageCount}>27</Text>
              </View>
            </View>
          </View>
        </View>
        {isKeyboardShow ? (
          <KeyboardAvoidingView
            style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
            behavior="padding"
            enabled
            keyboardVerticalOffset={100}>
            <ScrollView style={styles.groupChatMessageListView}>
              <View style={styles.groupChatMessageMiguelLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile1.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageMiguelText}>
                    <Text style={styles.groupChatMessageText}>
                      Eae galera beleza
                    </Text>
                  </View>
                </View>
                <View style={styles.groupChatMessageInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Miguel</Text>
                </View>
              </View>

              <View style={styles.groupChatMessageIsavellaLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile2.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageIsabellaText}>
                    <Text style={styles.groupChatMessageText}>
                      Boa madrugada familia
                    </Text>
                  </View>
                </View>
                <View style={styles.groupChatMessageInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Isabella</Text>
                </View>
              </View>

              <View style={styles.groupChatMessageChamaaaLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile3.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageChamaaaText}>
                    <Text style={styles.groupChatMessageChamaaaTextWidth}>
                      Hi guys follow me for cool videos of SAN DIEGO CALIFORNIA{' '}
                      <Text style={{color: 'rgb(0,126,255)'}}>
                        # follow4follow
                      </Text>
                    </Text>
                  </View>
                </View>

                <Image
                  style={styles.groupChatSendImage}
                  source={require('../../../images/groupChatSendImage.png')}
                />

                <View style={styles.groupChatMessageChamaaaInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Chamaaa</Text>
                </View>
              </View>

              <View style={styles.groupChatMessageIsavellaLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile2.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageIsabellaText}>
                    <Text style={styles.groupChatMessageText}>
                      Boa madrugada familia
                    </Text>
                  </View>
                </View>
                <View style={styles.groupChatMessageInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Isabella</Text>
                </View>
              </View>

              <View style={styles.groupChatMessageMiguelLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile1.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageMiguelText}>
                    <Text style={styles.groupChatMessageText}>
                      Eae galera beleza
                    </Text>
                  </View>
                </View>
                <View style={styles.groupChatMessageInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Miguel</Text>
                </View>
              </View>

              <View style={styles.groupChatMessageChamaaaLineView}>
                <View style={styles.groupChatMessageView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.groupChatMessageProfile}
                      source={require('../../../images/groupChatProfile3.png')}
                    />
                  </TouchableOpacity>
                  <View style={styles.groupChatMessageChamaaaText}>
                    <Text style={styles.groupChatMessageChamaaaTextWidth}>
                      Hi guys follow me for cool videos of SAN DIEGO CALIFORNIA{' '}
                      <Text style={{color: 'rgb(0,126,255)'}}>
                        # follow4follow
                      </Text>
                    </Text>
                  </View>
                </View>

                <Image
                  style={styles.groupChatSendImage}
                  source={require('../../../images/groupChatSendImage2.png')}
                />

                <View style={styles.groupChatMessageChamaaaInformation}>
                  <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                  <Text style={styles.groupChatMessageWriter}>Chamaaa</Text>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        ) : (
          <ScrollView style={styles.groupChatMessageListView}>
            <View style={styles.groupChatMessageMiguelLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile1.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageMiguelText}>
                  <Text style={styles.groupChatMessageText}>
                    Eae galera beleza
                  </Text>
                </View>
              </View>
              <View style={styles.groupChatMessageInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Miguel</Text>
              </View>
            </View>

            <View style={styles.groupChatMessageIsavellaLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile2.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageIsabellaText}>
                  <Text style={styles.groupChatMessageText}>
                    Boa madrugada familia
                  </Text>
                </View>
              </View>
              <View style={styles.groupChatMessageInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Isabella</Text>
              </View>
            </View>

            <View style={styles.groupChatMessageChamaaaLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile3.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageChamaaaText}>
                  <Text style={styles.groupChatMessageChamaaaTextWidth}>
                    Hi guys follow me for cool videos of SAN DIEGO CALIFORNIA{' '}
                    <Text style={{color: 'rgb(0,126,255)'}}>
                      # follow4follow
                    </Text>
                  </Text>
                </View>
              </View>

              <Image
                style={styles.groupChatSendImage}
                source={require('../../../images/groupChatSendImage.png')}
              />

              <View style={styles.groupChatMessageChamaaaInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Chamaaa</Text>
              </View>
            </View>

            <View style={styles.groupChatMessageIsavellaLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile2.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageIsabellaText}>
                  <Text style={styles.groupChatMessageText}>
                    Boa madrugada familia
                  </Text>
                </View>
              </View>
              <View style={styles.groupChatMessageInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Isabella</Text>
              </View>
            </View>

            <View style={styles.groupChatMessageMiguelLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile1.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageMiguelText}>
                  <Text style={styles.groupChatMessageText}>
                    Eae galera beleza
                  </Text>
                </View>
              </View>
              <View style={styles.groupChatMessageInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Miguel</Text>
              </View>
            </View>

            <View style={styles.groupChatMessageChamaaaLineView}>
              <View style={styles.groupChatMessageView}>
                <TouchableOpacity>
                  <Image
                    style={styles.groupChatMessageProfile}
                    source={require('../../../images/groupChatProfile3.png')}
                  />
                </TouchableOpacity>
                <View style={styles.groupChatMessageChamaaaText}>
                  <Text style={styles.groupChatMessageChamaaaTextWidth}>
                    Hi guys follow me for cool videos of SAN DIEGO CALIFORNIA{' '}
                    <Text style={{color: 'rgb(0,126,255)'}}>
                      # follow4follow
                    </Text>
                  </Text>
                </View>
              </View>

              <Image
                style={styles.groupChatSendImage}
                source={require('../../../images/groupChatSendImage2.png')}
              />

              <View style={styles.groupChatMessageChamaaaInformation}>
                <Text style={styles.groupChatMessageTime}>11:35 25 OCT.</Text>
                <Text style={styles.groupChatMessageWriter}>Chamaaa</Text>
              </View>
            </View>
          </ScrollView>
        )}

        <KeyboardAwareScrollView
          style={styles.groupChatMessageInputScrollView}
          resetScrollToCoords={{x: 0, y: 0}}
          scrollEnabled={false}>
          <View style={styles.groupChatMessageInputView}>
            {/* <TouchableOpacity 
            // style={styles.groupChatMessageInput}
            > */}
              {/* <Text style={styles.groupChatMessageWriteView}>Your message..</Text> */}
              <TextInput
                style={styles.groupChatMessageInput}
                placeholder="Your message.."
                placeholderTextColor={'black'}
              />
            {/* </TouchableOpacity> */}
            <TouchableOpacity onPress={this.handleChoosePhoto}>
              <Image
                style={styles.groupChatInputGallery}
                source={require('../../../images/messageGallary.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.groupChatInputSupport}
                source={require('../../../images/messageSupport.png')}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>

        {/* <KeyboardAwareScrollView
          style={{backgroundColor: '#4c69a5'}}
          resetScrollToCoords={{x: 0, y: 0}}
          contentContainerStyle={styles.groupChatMessageInput}
          scrollEnabled={false}>
          <Image source={require('../../../images/messageSupport.png')} />
          <TextInput placeholder="Email" />
          <TextInput placeholder="Username" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirm Password" />
        </KeyboardAwareScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 200,
  },
  groupChatView: {
    marginLeft: 20,
    marginRight: 20,
  },
  greetingMessageView: {
    borderBottomColor: 'rgba(125,125,125,.5)',
    borderBottomWidth: 1,
    borderTopColor: 'rgba(125,125,125,.5)',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  greetingMessageContent: {
    width: 310,
  },
  greetingMessageText: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  lastMessageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  lastMessageContent: {
    borderRadius: 33,
    width: deviceWidth - 80,
    height: 38,
    borderWidth: 1.3,
    borderColor: 'rgb(255,120,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastMessageText: {
    fontSize: 15,
  },
  lastMessageProfile: {
    width: 33,
    height: 33,
    borderRadius: 33,
    marginLeft: 10,
  },
  lastMessageInformation: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
    marginTop: 2,
    marginBottom: 16,
  },
  lastMessageTime: {
    fontSize: 8,
    opacity: 0.5,
    marginRight: 12,
  },
  lastMessageImage: {
    width: 12.7,
    height: 15,
    marginRight: 3,
  },
  lastMessageCount: {
    fontSize: 11.3,
    color: 'rgb(255,120,0)',
    marginRight: 3,
  },
  groupChatMessageListView: {
    marginLeft: 20,
    marginRight: 20,
  },
  groupChatMessageMiguelLineView: {
    marginTop: 10,
    marginBottom: 10,
    width: 200,
  },
  groupChatMessageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupChatMessageProfile: {
    width: 33,
    height: 33,
    borderRadius: 33,
    marginRight: 15,
  },
  groupChatMessageMiguelText: {
    width: 152,
    height: 38.7,
    backgroundColor: 'rgb(237,237,237)',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupChatMessageText: {
    fontSize: 14,
    lineHeight: 18.7,
    fontWeight: '400',
  },
  groupChatMessageChamaaaTextWidth: {
    fontSize: 14,
    lineHeight: 18.7,
    fontWeight: '400',
    // textAlign:'center',
    // backgroundColor:'blue',
    // width:280,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  groupChatMessageInformation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
  },
  groupChatMessageTime: {
    fontSize: 8.7,
    color: 'rgb(117,117,117)',
    opacity: 0.8,
    marginRight: 3,
  },
  groupChatMessageWriter: {
    fontSize: 8.7,
    color: 'rgb(117,117,117)',
    opacity: 0.8,
  },
  groupChatMessageIsavellaLineView: {
    marginTop: 10,
    marginBottom: 10,
    width: 240,
  },
  groupChatMessageIsabellaText: {
    width: 192,
    height: 38.7,
    backgroundColor: 'rgb(237,237,237)',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupChatMessageChamaaaLineView: {
    marginTop: 10,
    marginBottom: 10,
    width: deviceWidth - 40,
  },
  groupChatMessageChamaaaText: {
    width: deviceWidth - 88,
    height: 60,
    backgroundColor: 'rgb(237,237,237)',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupChatSendImage: {
    marginTop: 10,
    width: 130,
    height: 180,
    borderRadius: 6,
    marginLeft: 48,
  },
  groupChatMessageChamaaaInformation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
    width: 178,
  },
  groupChatMessageInputScrollView: {
    // flexDirection: 'row',
    height: 120,
    marginLeft: 20,
    marginRight: 20,
    // alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgb(186,186,186)',
    // height: 199,
  },
  groupChatMessageInputView: {
    flexDirection: 'row',
    height: 70,
    // marginLeft: 20,
    // marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderTopWidth: 1,
    // borderTopColor: 'rgb(186,186,186)',
  },
  groupChatMessageInput: {
    borderWidth: 0.7,
    borderColor: 'rgb(112,112,112)',
    height: 40,
    borderRadius: 33.3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    fontSize: 15,
    opacity: 1,
    paddingLeft:15
  },
  groupChatMessageWriteView: {
    fontSize: 15,
    opacity: 0.4,
    marginLeft: 15,
  },
  groupChatInputGallery: {
    width: 40,
    height: 40,
    marginLeft: 9,
    marginRight: 9,
  },
  groupChatInputSupport: {
    width: 40,
    height: 40,
    marginRight: 3,
  },
});
