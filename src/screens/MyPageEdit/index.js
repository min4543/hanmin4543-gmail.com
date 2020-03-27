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
const Tab = createMaterialTopTabNavigator();
var deviceWidth = Dimensions.get('window').width;

export default class MyPageEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {photo: null};
  }
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
    const {photo} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.channelImageView}>
            <TouchableOpacity>
              <Image
                style={styles.channelImage}
                source={require('../../../images/channelImage1.png')}
              />
            </TouchableOpacity>

            <View>
              <View style={styles.channelAddProfile1Column}>
                <TouchableOpacity onPress={this.handleChoosePhoto}>
                  <Image
                    style={styles.channel4Image}
                    source={require('../../../images/channelImage2.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.channelAddImage} onPress={this.handleChoosePhoto}>
                  <Image
                    style={styles.channelAddPlusImage}
                    source={require('../../../images/addProfile.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.channelAddProfile2Column}>
                <TouchableOpacity style={styles.channelAddImage} onPress={this.handleChoosePhoto}>
                  <Image
                    style={styles.channelAddPlusImage}
                    source={require('../../../images/addProfile.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.channelAddImage} onPress={this.handleChoosePhoto}>
                  <Image
                    style={styles.channelAddPlusImage}
                    source={require('../../../images/addProfile.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.channelAddImageTextView}>
            <View style={styles.channelAddImageTextContent}>
              <Text style={styles.channelAddImageText}>
                Taps to change or delete photos. Drag the photo or video to
                change their order.
              </Text>
            </View>
          </View>

          <View style={styles.channelEditView}>
            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Channel ID</Text>
              {/* <Text style={styles.channelEditItem}>Sophia</Text> */}
              <TextInput
                style={styles.channelEditItem}
                placeholder="Sophia"
                placeholderTextColor={'black'}
              />
            </View>
            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Gender</Text>
              <View style={styles.channelEditItemHasEyeView}>
                <View style={styles.channelEditItemHasTextView}>
                  <TextInput
                style={styles.channelEditItemHasEye}
                placeholder="Female"
                placeholderTextColor={'black'}
              />
                  <Image
                    style={styles.channelEditItemEye}
                    source={require('../../../images/eye.png')}
                  />
                </View>
              
              </View>
            </View>
            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Birthday</Text>
              <View style={styles.channelEditItemHasEyeView}>
                <View style={styles.channelEditItemHasTextView}>
                  <TextInput
                style={styles.channelEditItemHasEye}
                placeholder="24 OCT 1980"
                placeholderTextColor={'black'}
              />
                  <Image
                    style={styles.channelEditItemEye}
                    source={require('../../../images/eyeOff.png')}
                  />
                </View>
                
              </View>
            </View>
            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Hometown</Text>
              <View style={styles.channelEditItemHasEyeView}>
                <View style={styles.channelEditItemHasTextView}>
                  <TextInput
                style={styles.channelEditItemHasEye}
                placeholder="Interlaken"
                placeholderTextColor={'black'}
              />
                  <Image
                    style={styles.channelEditItemEye}
                    source={require('../../../images/eye.png')}
                  />
                </View>
                
              </View>
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Language</Text>
              <TextInput
                style={styles.channelEditItem}
                placeholder="English"
                placeholderTextColor={'black'}
              />
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Channel Title</Text>
              
              <TextInput
                style={styles.channelEditItemHasColor}
                placeholder="Secrets of nature"
                placeholderTextColor={'rgb(0,153,181)'}
              />
            </View>

            <View style={styles.channelEditChannelIdGreeting}>
              <Text style={styles.channelEditCategoryGreeting}>Greeting</Text>
              <View style={styles.channelEditChannelGreetingTextCountView}>
                <View style={styles.channelEditGrettingItemView}>
                  <Text style={styles.channelEditGrettingItem}>
                    Nature at its most mysterious, brutal and implacable - just
                    as Herzog likes it.
                  </Text>
                  {/* <Text style={styles.channelEditGrettingItemCount}>
                    102/150
                  </Text> */}
                </View>
                {/* <View style={styles.channelEditGrettingItemCountView}>
                  <Text style={styles.channelEditGrettingItemCount}>
                    102/150
                  </Text>
                </View> */}
              </View>
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Channel Tag</Text>
              <Text style={styles.channelEditItemHasColor}>
                # nature # mysterious
              </Text>
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Channel Tag</Text>
              <Text style={styles.channelEditItemHasColor}>
                # nature # mysterious
              </Text>
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Like tag</Text>
              <Text style={styles.channelEditItemHasColor}>
                # study # secret # cheerful
              </Text>
            </View>

            <View style={styles.channelEditChannelId}>
              <Text style={styles.channelEditCategory}>Refuse tag</Text>
              <Text style={styles.channelEditItemHasColor}>
                # girl # cook # violence # fight
              </Text>
            </View>

            <View style={styles.channelEditPlusView}>
              <View style={styles.channelEditPlusFirstLine}>
                <Text style={styles.channelEditCategory}>My link</Text>
                <Text style={styles.channelEditItemHasColor}>
                  m.youtube.be/vK2bQo-M
                </Text>
                <TouchableOpacity style={styles.channelEditChangeButton}>
                  <Image
                    style={styles.minusbutton}
                    source={require('../../../images/minus90X90.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.channelEditPlusSecondLine}>
                <Text style={styles.channelEditPlusEdit}>
                  Add your SNS link
                </Text>
                <TouchableOpacity style={styles.channelEditChangeButton}>
                  <Image
                    style={styles.plusbutton}
                    source={require('../../../images/plus90X90.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.channelEditPlusView}>
              <View style={styles.channelEditPlusFirstLine}>
                <Text style={styles.channelEditCategory}>Channel link</Text>
                <Text style={styles.channelEditItemHasColor}>Phone</Text>
                <TouchableOpacity style={styles.channelEditChangeButton}>
                  <Image
                    style={styles.minusbutton}
                    source={require('../../../images/minus90X90.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.channelEditPlusSecondLine}>
                <Text style={styles.channelEditItemHasColor}>Facebook</Text>
                <TouchableOpacity style={styles.channelEditChangeButton}>
                  <Image
                    style={styles.minusbutton}
                    source={require('../../../images/minus90X90.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.channelEditPlusSecondLine}>
                <Text style={styles.channelEditPlusEdit}>
                  Add your SNS link
                </Text>
                <TouchableOpacity style={styles.channelEditChangeButton}>
                  <Image
                    style={styles.plusbutton}
                    source={require('../../../images/plus90X90.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.channelEditBlockView}>
              <View>
                <Text style={styles.channelEditBlockCategory}>
                  Block channel
                </Text>
              </View>
              <View style={styles.channelEditBlockListView}>
                <View style={styles.channelEditBlockListFisrt}>
                  <Image
                    style={styles.channelEditBlockProfile}
                    source={require('../../../images/block_profile1.png')}
                  />
                  <View>
                    <Text style={styles.channelEditBlockChannelId}>
                      ID name
                    </Text>
                    <View style={styles.channelEditBlockInfoView}>
                      <View style={styles.channelEditBlockChannelLevelView}>
                        <Text style={styles.channelEditBlockChannelLevel}>
                          Lv. 8
                        </Text>
                      </View>
                      <Text style={styles.channelEditBlockChannelName}>
                        Channel name
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.channelEditUnblockButtonView}>
                    <Text style={styles.channelEditUnblockButtonText}>
                      Unblock
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.channelEditBlockListSecond}>
                  <Image
                    style={styles.channelEditBlockProfile}
                    source={require('../../../images/block_profile2.png')}
                  />
                  <View>
                    <Text style={styles.channelEditBlockChannelId}>
                      ID name
                    </Text>
                    <View style={styles.channelEditBlockInfoView}>
                      <View style={styles.channelEditBlockChannelLevelView}>
                        <Text style={styles.channelEditBlockChannelLevel}>
                          Lv. 8
                        </Text>
                      </View>
                      <Text style={styles.channelEditBlockChannelName}>
                        Channel name
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.channelEditUnblockButtonView}>
                    <Text style={styles.channelEditUnblockButtonText}>
                      Unblock
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  channelImageView: {
    flexDirection: 'row',
    marginRight: 62,
    marginLeft: 62,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 38,
  },
  channelAddProfile1Column: {
    flexDirection: 'row',
  },
  channelAddProfile2Column: {
    flexDirection: 'row',
  },
  channel4Image: {
    width: 72,
    height: 72,
    borderRadius: 6,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  channelAddImage: {
    width: 72,
    height: 72,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgb(201, 201, 201)',
    borderWidth: 1.3,
    marginLeft: 2.5,
    marginRight: 2.5,
    marginTop: 2.5,
    marginBottom: 2.5,
  },
  channelAddPlusImage: {
    width: 18,
    height: 18,
  },
  channelAddImageTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  channelAddImageTextContent: {
    width: 400,
    borderBottomColor: 'rgb(175,175,175)',
    borderBottomWidth: 0.7,
    alignItems: 'center',
  },
  channelAddImageText: {
    fontSize: 8,
    color: 'rgb(139,139,139)',
    marginBottom: 10,
  },
  channelEditView: {
    marginTop: 36,
    marginLeft: 18,
    marginRight: 14,
  },
  channelEditChannelId: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  channelEditCategory: {
    fontSize: 12.7,
    textAlign: 'left',
    color: 'rgb(89,89,89)',
    width: 80,
    marginRight: 30,
  },
  channelEditItem: {
    fontSize: 16,
    textAlign: 'left',
    color: 'rgb(0,0,0)',
    flex: 1,
  },
  channelEditItemHasColor: {
    fontSize: 16,
    textAlign: 'left',
    color: 'rgb(0,153,181)',
    flex: 1,
    backgroundColor: 'white',
  },
  channelEditItemHasEyeView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  channelEditItemHasTextView: {
    flexDirection: 'row',
    flex: 1,
  },
  channelEditItemHasEye: {
    fontSize: 16,
    textAlign: 'left',
    color: 'rgb(0,0,0)',
  },
  channelEditItemEye: {
    height: 20,
    width: 20,
    marginLeft: 8,
  },
  channelEditChangeButton: {
    height: 16,
    width: 16,
    marginRight: 16,
  },
  channelEditChannelGreetingTextCountView: {
    justifyContent: 'flex-end',
  },
  channelEditGrettingItemView: {
    width: 257,
    marginLeft: 30,
  },
  channelEditChannelIdGreeting: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
    alignItems: 'flex-start',
  },
  channelEditCategoryGreeting: {
    fontSize: 12.7,
    textAlign: 'left',
    color: 'rgb(89,89,89)',
    marginRight: 30,
  },
  channelEditGrettingItem: {
    fontSize: 11,
    color: 'rgb(0,153,181)',
    textAlign: 'left',
  },
  channelEditGrettingItemCountView: {},
  channelEditGrettingItemCount: {
    fontSize: 9,
    color: 'rgb(0,153,181)',
    textAlign: 'right',
  },
  channelEditPlusView: {
    marginBottom: 16,
  },
  channelEditPlusFirstLine: {
    flexDirection: 'row',
  },
  channelEditPlusSecondLine: {
    flexDirection: 'row',
    marginTop: 9.7,
    marginLeft: 110,
  },
  channelEditPlusEdit: {
    fontSize: 14,
    textAlign: 'left',
    color: 'black',
    opacity: 0.2,
    flex: 1,
  },
  minusbutton: {
    width: 26,
    height: 26,
  },
  plusbutton: {
    width: 26,
    height: 26,
  },
  channelEditBlockView: {
    flexDirection: 'row',
  },
  channelEditBlockCategory: {
    fontSize: 12.7,
    textAlign: 'left',
    color: 'rgb(89,89,89)',
    width: 100,
    marginRight: 10,
  },
  channelEditBlockListFisrt: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  channelEditBlockListSecond: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  channelEditBlockProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 13,
  },
  channelEditBlockChannelId: {
    fontSize: 15,
    fontWeight: '600',
  },
  channelEditBlockInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  channelEditBlockChannelLevelView: {
    borderRadius: 2,
    backgroundColor: 'rgb(120,120,120)',
    height: 12,
    width: 24,
    marginRight: 1,
  },
  channelEditBlockChannelLevel: {
    fontSize: 8,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  channelEditBlockChannelName: {
    fontSize: 12,
  },
  channelEditUnblockButtonView: {
    borderRadius: 33,
    width: 70,
    height: 23,
    backgroundColor: 'rgb(235,235,235)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  channelEditUnblockButtonText: {
    fontSize: 10,
    color: 'rgb(66,66,66)',
  },
});
