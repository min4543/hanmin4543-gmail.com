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
var deviceWidth = Dimensions.get('window').width;

const folderGroup = [
  {
    key: 'folder-0',
    folderName: 'Culture',
  },
  {
    key: 'folder-1',
    folderName: 'Food',
  },
  {
    key: 'folder-2',
    folderName: 'Nature',
  },
  {
    key: 'folder-3',
    folderName: 'People',
  },
];

export default class MentionVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderGroupListData: folderGroup,
    };
  }

  render() {
    const {pressManagingFolder} = this.props;
    const {folderGroupListData} = this.state;
    var folderLoop = [];

    for (let i = 0; i < folderGroupListData.length; i++) {
      folderLoop.push(
        <View key={folderGroupListData[i].key} style={styles.folderFlex}>
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              this.setState({
                ...this.state,
                folder: folderGroupListData[i].folderName,
              });
            }}>
            <Text
              style={
                this.state.folder === folderGroupListData[i].folderName
                  ? styles.folderSelected
                  : styles.folderNameText
              }>
              {folderGroupListData[i].folderName}
            </Text>
          </TouchableHighlight>
        </View>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.folderGroupView}>
          <Image
            style={styles.folderImage}
            source={require('../../../images/folder.png')}
          />
          {folderLoop}
          <Image
            style={styles.folderMore}
            source={require('../../../images/component961.png')}
          />
        </View>

        <View style={styles.filterView}>
          <View style={styles.filterTabView}>
            <View style={styles.filterHeaderView}>
              <Image
                style={styles.filterImage}
                source={require('../../../images/homeFilter.png')}
              />
            </View>
            <View style={styles.filterItemView}>
              <Text style={styles.filterText}>Recent</Text>
              <View style={styles.filterSeparateView}></View>
              <Text style={styles.filterText}>Video</Text>
              <View style={styles.filterSeparateView}></View>
              <Text style={styles.filterText}>Both</Text>
            </View>
          </View>
          <View style={styles.sortView}>
            <TouchableOpacity>
              <Image
                style={styles.sortImage}
                source={require('../../../images/sort3By.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.props.pressManagingFolder} >
              <Image
                style={styles.settingImage}
                source={require('../../../images/settings.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.myPostView}>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.myPostView}>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.myPostView}>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.myPost}>
            <View style={styles.myPostTimeView}>
              <View style={styles.myPostTimeContent}>
                <Text style={styles.myPostTime}>12:45</Text>
              </View>
            </View>
            <View style={styles.myPostInfoView}>
              <View style={styles.myPostInfoContent}>
                <Image
                  style={styles.myPostProfile}
                  source={require('../../../images/postProfile.png')}
                />
                <View style={styles.myPostLike}>
                  <Image
                    style={styles.myPostLiveLike}
                    source={require('../../../images/liveLike54X54.png')}
                  />
                  <Text style={styles.myPostLiveLikeNumber}>34 k</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  folderGroupView: {
    marginTop: 15,
    marginLeft: 19,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  folderImage: {
    width: 20,
    height: 20,
  },
  folderFlex: {
    flex: 1,
  },
  folderNameText: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  folderMore: {
    width: 13,
    height: 13,
  },
  folderSelected: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  filterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 5,
  },
  filterTabView: {
    width: 180,
    height: 27,
    borderRadius: 13.5,
    backgroundColor: 'rgba(178, 178, 178, 1)',
    marginLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterHeaderView: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
  filterImage: {
    width: 24,
    height: 24,
  },
  filterItemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  filterSeparateView: {
    width: 0.7,
    height: 11,
    backgroundColor: 'rgba(243, 243, 243, .2)',
  },
  filterText: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 1)',
  },
  sortView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 26,
    width: 70,
  },
  sortImage: {
    width: 26,
    height: 26,
  },
  settingImage: {
    width: 26,
    height: 26,
  },
  myPostView: {
    flexDirection: 'row',
    marginLeft: 9,
    marginRight: 9,
    marginTop: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myPost: {
    backgroundColor: 'rgb(141,141,141)',
    borderRadius: 6,
    width: deviceWidth / 3,
    height: 238,
    flex: 1,
    marginLeft: 1.5,
    marginRight: 1.5,
  },
  myPostTimeView: {
    alignItems: 'flex-end',
    marginRight: 4,
    marginTop: 4,
  },
  myPostTimeContent: {
    width: 33,
    height: 16,
    backgroundColor: 'gray',
    borderRadius: 3,
    justifyContent: 'center',
  },
  myPostTime: {
    color: 'white',
    fontSize: 9,
    textAlign: 'center',
  },
  myPostInfoView: {
    justifyContent: 'flex-end',
    flex: 1,
    marginLeft: 7,
    marginBottom: 7,
    marginRight: 8,
  },
  myPostInfoContent: {
    flexDirection: 'row',
  },
  myPostProfile: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  myPostLike: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  myPostLiveLike: {
    width: 18,
    height: 18,
  },
  myPostLiveLikeNumber: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
  },
});
