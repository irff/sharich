import React from 'react';

import {
  Button,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View
  } from 'react-native';
import { Subscribe, Provider } from 'unstated';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import { Text, Bold } from "../components/StyledText";
import { PieChart } from 'react-native-svg-charts';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import pallete from '../styles/colors';
import DashboardContainer from '../containers/DashboardContainer';

export default class DashboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  };

  render() {
    return (
      <Subscribe to={[DashboardContainer]}>
      {({ state }) => (
      <Box>
        <ScrollView>
          <Box p={24} bg={pallete.white}>
            <Text>Day to Day Performance</Text>
          </Box>

          <Box flex={1} flexDirection='row' alignItems='center'>
            <CoolBox flex={1} m={1.5}>
              <Text>Profit</Text>
              <Text>{state.account.profit.percent}%</Text>
              <Text>IDR {state.account.profit.value}</Text>
            </CoolBox>

            <CoolBox flex={1} m={1.5}>
              <Text>Income</Text>
              <Text>{state.account.income.percent}%</Text>
              <Text>IDR {state.account.income.value}</Text>
            </CoolBox>
          </Box>

          <CoolBox flex={1} flexDirection='row' alignItems='center'>
            <Box flex={1}><Text>Current Balance</Text></Box>
            <Box flex={1}><Text>IDR {state.account.balance}</Text></Box>
          </CoolBox>

          <CoolBox flex={1} flexDirection='row' alignItems='center'>
            <Box flex={1}><Text>Risk Profile</Text></Box>
            <Box flex={1}><Text>{state.riskProfile[state.riskProfileIdx].title}</Text></Box>
          </CoolBox>

          <Text>Current Asset Allocation</Text>
          <CoolBox my={6}>
            <Text>HEHEHE</Text>
          </CoolBox>

          <Box flex={1} flexDirection='row' alignItems='center'>
            <Box flex={1}><Text>Transaction History</Text></Box>
            <Box flex={1}><Text>See All</Text></Box>
          </Box>

          <Box>
            {
              state.transactions.map((transaction, index) => (
                <Box flex={1} flexDirection='row' >
                  <Box flex={1}><Text>ICON</Text></Box>
                  <Box flex={3}><Text>{transaction.type}</Text></Box>
                  <Box flex={3}><Text>{transaction.value}</Text></Box>
                  <Box flex={3}><Text>{transaction.date}</Text></Box>
                </Box>
              ))
            }
          </Box>

        </ScrollView>
        <Box style={styles.tabBarInfoContainer}>
          <Button title='Top Up Balance'/>
        </Box>
      </Box>
    )}
      </Subscribe>
    )
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
`;

const styles = StyleSheet.create({
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  }
})