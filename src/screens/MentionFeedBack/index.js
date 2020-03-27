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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
var deviceWidth = Dimensions.get('window').width;

export default class MentionFeedBack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {} = this.props;
    const {massageListData} = this.state;

    // const data1 = [1,2,3,4,5,6,7]
    // const data2 = [3,4,5,6,2,1,5]

    // const data = [
    //     {
    //         data: data1,
    //         svg: { stroke :'#8800cc'},
    //     },
    //     {
    //         data: data2,
    //         svg: { stroke : 'green'},
    //     },
    // ]

    return (
      <ScrollView style={styles.container}>
        <View style={styles.supportChartView}>
          <Text style={styles.supportChartTitle}>Post view</Text>
          <View style={styles.chartListView}>
            <LineChart
              data={{
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                  {
                    data: [4, 2, 5, 4, 3, 5, 18],
                    color: (opacity = 1) => `rgba(0, 0, 0, 1)`, // optional

                    strokeWidth: 2,
                  },
                  {
                    data: [2, 7, 4, 3, 5, 1, 3],
                    color: (opacity = 0.7) => `rgba(125, 125, 125, ${opacity})`, // optional

                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={160}
              withDots={false}
              withInnerLines={false}
              withHorizontalLabels={false}
              fromZero={true}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
              }}
            />
          </View>
          <View style={styles.chartListResultView}>
            <View style={styles.chartListResultContent}>
              <Text style={styles.chartListResultBold}>13% UP</Text>
              <Text style={styles.chartListResultText}>
                Compared to previous week
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.supportChartView}>
          <Text style={styles.supportChartTitle}>Live audience</Text>
          <View style={styles.chartListView}>
            <LineChart
              data={{
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                  {
                    data: [4, 2, 5, 4, 3, 5, 8],
                    color: (opacity = 1) => `rgba(0, 0, 0, 1)`, // optional

                    strokeWidth: 2,
                  },
                  {
                    data: [2, 7, 4, 3, 5, 1, 3],
                    color: (opacity = 1) => `rgba(125, 125, 125, ${opacity})`, // optional
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={160}
              withDots={false}
              withInnerLines={false}
              withHorizontalLabels={false}
              fromZero={true}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={styles.chartListResultView}>
            <View style={styles.chartListResultContent}>
              <Text style={styles.chartListResultBold}>13% UP</Text>
              <Text style={styles.chartListResultText}>
                Compared to previous week
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.supportChartView}>
          <Text style={styles.supportChartTitle}>Follower</Text>
          <View style={styles.chartListView}>
            <LineChart
              data={{
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                  {
                    data: [4, 2, 5, 4, 3, 5, 8],
                    color: (opacity = 1) => `rgba(0, 0, 0, 1)`, // optional

                    strokeWidth: 2,
                  },
                  {
                    data: [2, 7, 4, 3, 5, 1, 3],
                    color: (opacity = 0.7) => `rgba(125, 125, 125, ${opacity})`, // optional
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={160}
              withDots={false}
              withInnerLines={false}
              withHorizontalLabels={false}
              fromZero={true}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={styles.chartListResultView}>
            <View style={styles.chartListResultContent}>
              <Text style={styles.chartListResultBold}>13% UP</Text>
              <Text style={styles.chartListResultText}>
                Compared to previous week
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.pointChartView}>
          <Text style={styles.supportChartTitle}>Point</Text>
          <View style={styles.chartListView}>
            <LineChart
              data={{
                labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                datasets: [
                  {
                    data: [4, 2, 5, 4, 3, 5, 8],
                    color: (opacity = 1) => `rgba(0, 0, 0, 1)`, // optional

                    strokeWidth: 2,
                  },
                  {
                    data: [2, 7, 4, 3, 5, 1, 3],
                    color: (opacity = 0.7) => `rgba(125, 125, 125, ${opacity})`, // optional
                    strokeWidth: 2,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={160}
              withDots={false}
              withInnerLines={false}
              withHorizontalLabels={false}
              fromZero={true}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
          <View style={styles.chartListResultView}>
            <View style={styles.chartListResultContent}>
              <Text style={styles.chartListResultBold}>13% UP</Text>
              <Text style={styles.chartListResultText}>
                Compared to previous week
              </Text>
            </View>
          </View>
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
  supportChartView: {
    marginTop: 29,
    marginLeft: 20,
    marginRight: 20,
  },
  supportChartTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chartListView: {
    alignItems: 'center',
  },
  chartListResultView: {
    alignItems: 'flex-end',
  },
  chartListResultContent: {
    flexDirection: 'row',
    backgroundColor: 'rgb(240,240,240)',
    width: 170,
    height: 16,
    borderRadius: 8.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  chartListResultBold: {
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 5,
  },
  chartListResultText: {
    fontSize: 8,
    opacity: 0.7,
  },
  pointChartView:{

    marginTop: 29,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 70
  }
});
