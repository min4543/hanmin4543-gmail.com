import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MyPage from './src/screens/MyPage';
import Mention from './src/screens/Mention';
import MyPageMore from './src/screens/MyPageMore';
import MyPageEdit from './src/screens/MyPageEdit';
import GroupChat from './src/screens/GroupChat';
import MyLive from './src/screens/MyLive';
import InviteFriends from './src/screens/InviteFriends';
import Invite from './src/screens/Invite';

import {Image, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
var deviceWidth = Dimensions.get('window').width;

function MyPageStack() {
  return (
    <Stack.Navigator initialRouteName="Mypage">
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={({navigation}) => ({
          headerTitle: (
              <Image
                source={require('./images/logoGray.png')}
                style={{ 
              
                
                width:62
              
              }} 
                resizeMode="contain"

              />
              
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{height: 33, marginRight: 19}}
              onPress={() => {
                navigation.toggleDrawer();
              }}>
              <Image source={require('./images/more.png')} />
            </TouchableOpacity>
          ),
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            
          },
          headerTitleStyle: {
            elevation: 0,
            shadowOpacity: 0,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
            textAlign:'center',
            height:75,
            marginLeft:(deviceWidth/2)-45
            // (deviceWidth/2)-31
          },
        })}
      />
      <Stack.Screen
        name="Mention"
        component={Mention}
        options={({navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center',marginBottom:10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 33,
                  height: 33,
                  marginRight: 11,
                  marginLeft: 19,
                }}>
                <Image source={require('./images/back.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                }}>
                Mention
              </Text>
            </View>
          ),
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
      <Stack.Screen
        name="MyPageEdit"
        component={MyPageEdit}
        options={({navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center',marginBottom:10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 33,
                  height: 33,
                  marginRight: 11,
                  marginLeft: 19,
                }}>
                <Image source={require('./images/back.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                }}>
                Edit
              </Text>
            </View>
          ),
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
      <Stack.Screen
        name="GroupChat"
        component={GroupChat}
        options={({navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center',justifyContent:'center', marginBottom:10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 33,
                  height: 33,
                  marginRight: 11,
                  marginLeft: 19,
                }}>
                <Image source={require('./images/back.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                }}>
                Sophia's switzerland
              </Text>
            </View>
          ),
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
      <Stack.Screen
        name="MyLive"
        component={MyLive}
        options={({navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center',marginBottom:10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 33,
                  height: 33,
                  marginRight: 11,
                  marginLeft: 19,
                }}>
                <Image source={require('./images/back.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                }}>
                My Live
              </Text>
            </View>
          ),
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
       <Stack.Screen
        name="InviteFriends"
        component={InviteFriends}
        options={({navigation}) => ({
          headerLeft: () => (
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'center',marginBottom:10}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 33,
                  height: 33,
                  marginRight: 11,
                  marginLeft: 19,
                }}>
                <Image source={require('./images/back.png')} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '400',
                }}>
                Invite friends
              </Text>
            </View>
          ),
          headerTitle: null,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
        })}
      />
    </Stack.Navigator>
    
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition={'right'}
        drawerContent={() => <MyPageMore />}>
        <Drawer.Screen name="Home" component={MyPageStack} />
        <Drawer.Screen name="Mention" component={Mention} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
