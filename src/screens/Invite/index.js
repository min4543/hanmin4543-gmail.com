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

export default class Invite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    const {} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.searchView}>
            <View style={styles.searchLine}>
              <Image
                style={styles.searchIcon}
                source={require('../../../images/search.png')}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor={'rgb(163,163,163)'}
              />
            </View>
            <TouchableOpacity style={styles.searchLocation}>
              <Image source={require('../../../images/location.png')} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/postProfile.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>Jenny</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/profile_man.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>Mike</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>Christina</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/myLiveImage1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>BlackPink</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>Christina</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>GomDolI</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>GomDolI</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>GomDolI</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.searchListView}>
            <Image
              style={styles.searchProfile}
              source={require('../../../images/message_profile1.png')}
            />
            <View style={styles.searchListInformationView}>
              <Text style={styles.searchID}>GomDolI</Text>
              <Text style={styles.searchPhoneNumber}>010-2345-3245</Text>
            </View>
            <TouchableOpacity style={styles.inviteSendButton}>
              <Text style={styles.inviteSendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.sendSmsView}>
          <TouchableOpacity style={styles.sendSmsButton}>
            <Text style={styles.sendSmsButtonText}>Send invitation SMS</Text>
          </TouchableOpacity>
          <Text style={styles.sendSmsFeeText}>SMS fees will be charged based on the local carrier rate.</Text>
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
  searchView: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: 19,
  },
  searchLine: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  searchIcon: {
    width: 26.7,
    height: 26.7,
    marginRight: 4,
  },
  searchInput: {
    opacity: 1,
    flex: 1,
  },
  searchLocation: {
    marginLeft: 10,
    marginRight: 19,
  },
  searchListView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 8,
    marginTop: 8,
  },

  searchProfile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 13,
  },
  searchListInformationView: {
    flex: 1,
  },
  searchID: {
    fontSize: 18,
    fontWeight: '500',
  },
  searchPhoneNumber: {
    fontSize: 16.7,
    opacity: 0.8,
  },
  inviteSendButton: {
    backgroundColor: 'rgb(235,235,235)',
    width: 75,
    height: 28.7,
    borderRadius: 33.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inviteSendButtonText: {
    fontSize: 16,
    color: 'rgb(66,66,66)',
  },
  sendSmsView:{
    alignItems:'center',
    marginTop:5
  },
  sendSmsButton:{
    width:176.7,
    height:37.3,
    borderWidth:1.3,
    borderColor:'rgb(178,178,178)',
    borderRadius:33.3,
    alignItems:'center',
    justifyContent:'center'
  },
  sendSmsButtonText:{
    fontSize:15.3,
  },
  sendSmsFeeText:{
    fontSize:10,
    color:'rgb(168,168,168)',
    marginBottom:15,
    marginTop:15
  }
});
