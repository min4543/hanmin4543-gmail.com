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
import Mention from '../Mention';

var deviceWidth = Dimensions.get('window').width;

export default class MyPageMore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.accountInformationView}>
          <Image
            style={styles.accountProfileImage}
            source={require('../../../images/currentAccountProfile.png')}
          />
          <View style={styles.accountTitleView}>
            <Text style={styles.accountTitle}>Account</Text>
            <Text style={styles.accountName}>Sophia's switzerland</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('../../../images/changeAccoount.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/myPin.png')}
            />
            <Text style={styles.accountMoreTitle}>My PIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/myChallenge.png')}
            />
            <Text style={styles.accountMoreTitle}>My challenge</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountMoreList}
            onPress={() => {
              console.log(this.props.navigation);
            }}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/inviteFriends.png')}
            />
            <Text style={styles.accountMoreTitle}>Invite friends</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/shareBoost.png')}
            />
            <Text style={styles.accountMoreTitle}>Share & Boost</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/qrCode.png')}
            />
            <Text style={styles.accountMoreTitle}>QR code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/financeToday.png')}
            />
            <Text style={styles.accountMoreTitle}>Finace today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/channelOptions.png')}
            />
            <Text style={styles.accountMoreTitle}>Channel options</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/generalSettings.png')}
            />
            <Text style={styles.accountMoreTitle}>General settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountMoreList}>
            <Image
              style={styles.accountMoreIcon}
              source={require('../../../images/logOut.png')}
            />
            <Text style={styles.accountMoreTitle}>Log out</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.logoBottomView}>
          <View style={styles.logoBottomContent}>
            <Image
              style={styles.logoBlack}
              source={require('../../../images/logo2.png')}
            />
            <Text style={styles.logoText}>Powered by Buenos Ltd.</Text>
          </View>
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
  accountInformationView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 50,//MaxPro
    marginTop: 20, //iphone 8
    marginLeft: 23,
    marginRight: 16,
    paddingBottom: 17,
    borderBottomWidth: 0.7,
    marginBottom: 6,
  },
  accountProfileImage: {
    width: 33.3,
    height: 33.3,
    borderRadius: 16,
  },
  accountTitleView: {
    marginLeft: 12,
    flex: 1,
  },
  accountTitle: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '500',
  },
  accountName: {
    fontSize: 12.7,
    fontWeight: '300',
  },
  accountMoreList: {
    flexDirection: 'row',
    marginBottom: 22,
    marginTop: 22,
    marginLeft: 28,
    alignItems: 'center',
  },
  accountMoreIcon: {
    width: 24.7,
    height: 24.7,
    marginRight: 10,
  },
  accountMoreTitle: {
    fontSize: 16,
    fontWeight: '400',
  },
  logoBottomView: {
    alignItems: 'flex-end',
    height: 84,
  },
  logoBottomContent: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 12,
    marginRight: 10,
  },
  logoBlack: {
    width: 75,
    height: 43,
  },
  logoText: {
    fontSize: 10,
    fontWeight: '300',
    marginTop: 7,
  },
});
