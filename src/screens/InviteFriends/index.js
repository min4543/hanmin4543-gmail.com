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
import MentionMessage from '../MentionMessage';
import Invite from '../Invite';
import DiscoverFriends from '../DiscoverFriends';

const Tab = createMaterialTopTabNavigator();
var deviceWidth = Dimensions.get('window').width;

export default class InviteFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.mentionTabNavigator}>
            <Tab.Navigator
              initialRouteName="Message"
              tabBarOptions={{
                labelStyle: styles.labelStyle,
                tabStyle: styles.tabStyle,
                style: styles.style,
                activeTintColor: '#000000',
                indicatorStyle: styles.indicatorStyle,
              }}>
              <Tab.Screen
                name="Invite"
                component={Invite}
                options={{tabBarLabel: 'Invite'}}
              />
              <Tab.Screen
                name="DiscoverFriends"
                component={DiscoverFriends}
                options={{tabBarLabel: 'Discover Friends'}}
              />
            </Tab.Navigator>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },

  mentionTabNavigator: {
    flex:1,
  },
  tabStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 1,
    borderBottomWidth: 1,
  },
  labelStyle: {
    fontSize: 10,
    // fontWeight: 'bold',
  },
  style: {
    borderColor: 'black',
    marginLeft: 16,
    marginRight: 16,
    elevation:0,
    shadowOpacity: 0
  },
  indicatorStyle: {
    backgroundColor: 'black',
    height: 3,
  },
});
