import React from 'react';

import { Button, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Subscribe } from 'unstated';
import { LinearGradient } from 'expo';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import numeral from 'numeral';

import { Text, Bold } from '../components/StyledText';
import { Box } from '../components/Box';
import { InputStyle } from '../components/common';
import palette from '../styles/colors';
import DashboardContainer from '../containers/DashboardContainer';
import { GreenButton } from '../components/Button';
import RiskProfileContainer from '../containers/RiskProfileContainer';
import ProgressBar from '../components/ProgressBar';

export default class DashboardScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Subscribe to={[DashboardContainer, RiskProfileContainer]}>
        {({ state }, { state: riskState, toggleExpand }) => (
          <Box flex={1} bg={palette.white}>
            <LinearGradient
              colors={[palette.skyBlue, palette.aquaGreen]}
              start={[0, 0]}
              end={[1, 0]}
            >
              <Box flexDirection="row" mt={24} p={3}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                  <Box ml={2}>
                    <MaterialIcons name="menu" size={24} color={palette.white} />
                  </Box>
                </TouchableOpacity>
                <Box alignItems="center" flex={1}>
                  <Bold size={16} color={palette.white}>
                    Dashboard
                  </Bold>
                </Box>
              </Box>
            </LinearGradient>
            <Box flex={1}>
              <ScrollView>
                <LinearGradient
                  colors={[palette.skyBlue, palette.aquaGreen]}
                  start={[0, 0]}
                  end={[1, 0]}
                >
                  <Box px={2} height={200} alignItems="center">
                    <Bold color={palette.white}>Day to Day Performance</Bold>
                  </Box>
                </LinearGradient>
                <Box mx={3}>
                  <Box flex={1} flexDirection="row" mt={-40}>
                    <CoolBox flex={1} mr={2} alignItems="center">
                      <Text>Profit</Text>
                      <Text color={palette.skyBlue} size={24}>
                        +{state.account.profit.percent}%
                      </Text>
                      <Text color={palette.warmGrey}>
                        IDR {numeral(state.account.profit.value).format('0.0a')}
                      </Text>
                    </CoolBox>

                    <CoolBox flex={1} ml={2} alignItems="center">
                      <Text>Balance</Text>
                      <Text color={palette.skyBlue} size={24}>
                        {numeral(state.account.balance).format('0.0a')}
                      </Text>
                      <Text color={palette.warmGrey}>
                        Invested IDR {numeral(state.account.invested).format('0.0a')}
                      </Text>
                    </CoolBox>
                  </Box>

                  <CoolBox flex={1} flexDirection="row" justifyContent="space-between" mt={2}>
                    <Text>Risk Profile</Text>
                    <Text color={palette.skyBlue}>
                      {state.riskProfile[state.riskProfileIdx].title}
                    </Text>
                  </CoolBox>

                  <Box pt={3}>
                    <Bold size={14} color={palette.warmGrey}>
                      Current Asset Allocation
                    </Bold>
                    {riskState.assetClass.map((asset, idx) => (
                      <CoolBox my={0.25} p={6} my={2} key={asset}>
                        <Box flexDirection="row" justifyContent="space-between">
                          <Box flexDirection="row" alignItems="center">
                            <Box mr={2}>
                              <Bold size={14}>{asset.title}</Bold>
                            </Box>
                            <Text size={12} color={palette.warmGrey}>
                              IDR {numeral(state.assetAllocationValue[idx]).format('0,0')}
                            </Text>
                          </Box>
                          <Text size={12}>{state.assetAllocationPercent[idx]}%</Text>
                        </Box>
                        <Box py={1}>
                          <ProgressBar
                            width={state.assetAllocationPercent[idx] / 100}
                            color={riskState.colors[idx]}
                          />
                        </Box>
                        {riskState.expanded[idx] && (
                          <Box py={3} px={2} mx={-2} my={2} bg={riskState.colors[idx]}>
                            <Text>{asset.description}</Text>
                          </Box>
                        )}
                        <Box alignItems="flex-end">
                          <TouchableOpacity onPress={() => toggleExpand(idx)}>
                            <Box flexDirection="row" alignItems="center">
                              <Text size={12} color={palette.warmGrey}>
                                {riskState.expanded[idx] ? 'Hide description' : 'See description'}
                              </Text>
                              <MaterialCommunityIcons
                                name={riskState.expanded[idx] ? 'chevron-up' : 'chevron-down'}
                                size={14}
                                color={palette.warmGrey}
                              />
                            </Box>
                          </TouchableOpacity>
                        </Box>
                      </CoolBox>
                    ))}
                  </Box>

                  <Box pt={3} justifyContent="space-between" flexDirection="row">
                    <Bold size={14} color={palette.warmGrey}>
                      Transaction History
                    </Bold>
                    <Text color={palette.green}>See All</Text>
                  </Box>

                  <Box>
                    {state.transactions.map((transaction, index) => (
                      <Box flex={1} flexDirection="row" key={`transaction-${index}`}>
                        <Box flex={1}>
                          <Text>ICON</Text>
                        </Box>
                        <Box flex={3}>
                          <Text>{transaction.type}</Text>
                        </Box>
                        <Box flex={3}>
                          <Text>{transaction.value}</Text>
                        </Box>
                        <Box flex={3}>
                          <Text>{transaction.date}</Text>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </ScrollView>
            </Box>
            <CoolBox radius={0}>
              <GreenButton title="Top Up Balance" />
            </CoolBox>
          </Box>
        )}
      </Subscribe>
    );
  }
}

const CoolBox = Box.extend`
  ${InputStyle};
`;
