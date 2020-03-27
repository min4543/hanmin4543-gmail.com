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

export default class Mention extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.props;
    const {} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.mentionHeader}>
            <TouchableOpacity>
              <Image
                style={styles.backImage}
                source={require('./images/back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.mentionTitle}>Mention</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mentionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 19,
    marginTop: 40,
  },
  backImage: {
    width: 33,
    height: 33,
    marginRight: 11,
    backgroundColor: 'orange',
  },
  mentionTitle:{
      fontSize:20,
      fontWeight:'500'
  }
});
